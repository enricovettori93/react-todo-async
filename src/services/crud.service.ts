import axios from "axios";

class CrudService<T, S> {
    url: string = "";

    fetch(): Promise<T[]> {
        return axios.get<T[]>(this.url).then(response => response.data);
    }

    delete(id: number): Promise<void> {
        return axios.delete<void>(`${this.url}/${id}`).then(response => response.data);
    }

    create(body: S): Promise<T> {
        return axios.post<T>(this.url, body).then(response => response.data);
    }

    update(id: number, body: T): Promise<T> {
        return axios.patch<T>(`${this.url}/${id}`).then(response => response.data);
    }
}

export default CrudService;
