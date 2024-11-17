import axios from "axios";

// Use environment variable for API base URL
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

// Function to get list of books with optional query parameters
export const getBooks = async (params) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books`, { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

// Function to get a single book by ID
export const getBookById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching book with ID ${id}:`, error);
        throw error;
    }
};

// Optional: Function to create a new book
export const createBook = async (bookData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/books`, bookData);
        return response.data;
    } catch (error) {
        console.error('Error creating book:', error);
        throw error;
    }
};

// Optional: Function to update an existing book
export const updateBook = async (id, updatedData) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/books/${id}`, updatedData);
        return response.data;
    } catch (error) {
        console.error(`Error updating book with ID ${id}:`, error);
        throw error;
    }
};

// Optional: Function to delete a book
export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/books/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting book with ID ${id}:`, error);
        throw error;
    }
};
