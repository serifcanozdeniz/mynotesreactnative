import React, { useState } from "react";
import MyContext from ".";
import { Alert } from "react-native";

const Provider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState('İkinci Sayfa');
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: 'Design Engineer',
            description: 'İlk not',
            date: new Date().toLocaleDateString(),
            read: false,
        },
        {
            id: 2,
            title: 'Software Engineer',
            description: 'İkinci not',
            date: new Date().toLocaleDateString(),
            read: false,

        },
        {
            id: 3,
            title: 'Content Writer',
            description: 'Üçüncü not',
            date: new Date().toLocaleDateString(),
            read: false,

        },
        {
            id: 4,
            title: 'Data Engineer',
            description: 'Son not',
            date: new Date().toLocaleDateString(),
            read: false,

        },
    ]);
    const addNote = item => {
        if (item) setNotes([...notes, item]);
        Alert.alert('Not eklendi');
    };

    const deleteNote = id => {
        if (id) {
            const deleteItems = notes.filter(item => item.id !== id);
            setNotes(deleteItems);
            Alert.alert('Not silindi');

        } else {
            Alert.alert('Not bulunamadı');
        }
    };
    const updateNote = (id, item) => {
        const updateItems = notes.map(note =>
            note.id === id ? { ...note, title: item.title, description: item.description, read: true } : note,
        );
        setNotes(updateItems);
        Alert.alert('Not güncellendi');

    };

    const changeCount = () => {
        setCount(count + 1)
    };
    const changeMessage = (text) => {
        setMessage(text)
    };
    return (
        <MyContext.Provider value={{ count, changeCount, message, changeMessage, notes, addNote, updateNote, deleteNote }}>
            {children}
        </MyContext.Provider>
    )
}
export default Provider;
