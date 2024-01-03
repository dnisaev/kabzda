import React, {useCallback, useMemo, useState} from 'react';
import {v1} from "uuid";

export default {
    title: 'UseMemo'
}

export const DifficultCountingExample = () => {

    const [a, setA] = useState(11)
    const [b, setB] = useState(13)

    let resultA
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 100000000) {
                fake++
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA
    }, [a]);

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret');

    return <div>
        {
            props.users.map((u, i) => <div key={i}>{u}</div>)
        }
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo');

    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Sveta', 'Viktor']);

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1);
    }, [users])

    const addUser = () => {
        const newUser = [...users, 'Jeka ' + v1()];
        setUsers(newUser);
    }

    const onClickHandler = () => {
        addUser();
        setCounter(counter + 1)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        <button onClick={onClickHandler}>+ add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

type BooksSecretPropsType = {
    addBook: () => void
    books: Array<string>
}

const BooksSecret = (props: BooksSecretPropsType) => {
    console.log('BooksSecret');

    return <div>
        <button onClick={() => props.addBook()}>add book</button>
        {
            props.books.map((b, i) => <div key={i}>{b}</div>)
        }
    </div>
}

const Books = React.memo(BooksSecret)

export const LikeUseCallbackMemo = () => {
    console.log('LikeUseCallbackMemo');

    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['Dostoevskiy', 'Pushkin', 'Tutchev', 'Tolstoy']);

    // const memoizedAddBookUseMemo = useMemo(() => {
    //     return () => {
    //         const newBook = [...books, 'Book ' + v1()];
    //         setBooks(newBook);
    //     }
    // }, [books]);

    const memoizedAddBookUseCallback = useCallback(() => {
            const newBook = [...books, 'Book ' + v1()];
            setBooks(newBook);
    }, [books]);

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Books addBook={memoizedAddBookUseCallback} books={books}/>
    </>
}