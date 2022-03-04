import {createSlice, createAsyncThunk, isAnyOf} from "@reduxjs/toolkit";
import {ITodo, ITodoBasicFields} from "../../../models/ToDo";
import TodoService from "../../../services/todo.service";

export interface TodoState {
    todos: ITodo[]
    fetching: boolean
    error: any
}

const initialState = {
    todos: [],
    fetching: false,
    error: null
} as TodoState;

export const fetchAllTodos = createAsyncThunk(
    'todo/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            return await TodoService.fetch();
        } catch (e) {
            return rejectWithValue('Cannot fetch todos');
        }
    }
)

export const deleteTodo = createAsyncThunk(
    'todo/deleteOne',
    async (id: number, {rejectWithValue}) => {
        try {
            await TodoService.delete(id);
            return {id};
        } catch (e) {
            return rejectWithValue(`Cannot delete todo #${id}`);
        }
    }
)

export const updateTodo = createAsyncThunk(
    'todo/updateOne',
    async ({id, body}: {id: number, body: ITodo}, {rejectWithValue}) => {
        try {
            await TodoService.delete(id);
            return {updatedTodo: body};
        } catch (e) {
            return rejectWithValue(`Cannot update todo #${id} body ${JSON.stringify(body)}`);
        }
    }
)

export const createTodo = createAsyncThunk(
    'todo/createOne',
    async (body: ITodoBasicFields, {rejectWithValue}) => {
        try {
            const response = await TodoService.create(body);
            return {newTodo: response};
        } catch (e) {
            return rejectWithValue(`Cannot create body ${JSON.stringify(body)}`);
        }
    }
)

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(deleteTodo.fulfilled, (state, action) => {
            const {id} = action.payload;
            state.fetching = false;
            state.error = null;
            state.todos = state.todos.filter((todo) => todo.id !== id);
        })

        builder.addCase(fetchAllTodos.fulfilled, (state, action) => {
            state.fetching = false;
            state.error = null;
            state.todos = action.payload;
        })

        builder.addCase(updateTodo.fulfilled, (state, action) => {
            const {updatedTodo} = action.payload;
            state.fetching = false;
            state.error = null;
            state.todos = state.todos.map((todo) => todo.id === updatedTodo.id ? updatedTodo : todo);
        })

        builder.addCase(createTodo.fulfilled, (state, action) => {
            const {newTodo} = action.payload;
            state.fetching = false;
            state.error = null;
            state.todos.push(newTodo);
        })

        builder.addMatcher(isAnyOf(fetchAllTodos.pending, deleteTodo.pending, updateTodo.pending, createTodo.pending), (state) => ({
            ...state,
            fetching: true
        }))

        builder.addMatcher(isAnyOf(fetchAllTodos.rejected, deleteTodo.rejected, updateTodo.rejected, createTodo.rejected), (state, action) => ({
            ...state,
            fetching: false,
            error: action.payload
        }))
    })
})

export const todoReducer = todoSlice.reducer;
