import React from 'react';
import { useState } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Pagination from './pagination';

/**
 * FriendList Component - Manages a list of friends with add, delete, and favorite functionality
 * Features:
 * - Add new friends by typing and pressing Enter
 * - Mark friends as favorites (close friends)
 * - Delete individual friends from the list
 * - Search/filter friends by name
 * - Paginate through friends (4 per page)
 * - Clear all friends at once
 */
const FriendList = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Event: Clear all friends from the list
    const clearAllList = () => {
        setInputData('');
        setItems([]);
        setCurrentPage(1);
    }

    // Event: Add a new friend to the list
    const addItem = (e) => {
        if (e.charCode === 13 && inputData.trim() !== "") {
            const newFriend = { 
                id: items.length, 
                friendName: inputData.trim(), 
                fav: 0 
            };
            setItems([...items, newFriend]);
            setInputData('');
        }
    }

    // Event: Delete a friend from the list
    const deleteItem = (elemId) => {
        const updatedItems = items.filter((elem) => elem.id !== elemId);
        setItems(updatedItems);
        
        // Adjust current page if needed
        const indexOfLastFriend = currentPage * itemsPerPage;
        const indexOfFirstFriend = indexOfLastFriend - itemsPerPage;
        const currentPageItems = updatedItems.slice(indexOfFirstFriend, indexOfLastFriend);
        
        if (currentPageItems.length === 0 && currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    // Event: Toggle friend as favorite
    const addRemoveFavourite = (elemId) => {
        const updatedItems = items.map((item) => {
            if (item.id === elemId) {
                return { ...item, fav: item.fav === 0 ? 1 : 0 };
            }
            return item;
        });
        
        // Sort so favorites appear at the top
        const sortedItems = [
            ...updatedItems.filter(item => item.fav === 1),
            ...updatedItems.filter(item => item.fav === 0)
        ].map((item, index) => ({ ...item, id: index }));
        
        setItems(sortedItems);
    }

    // Event: Update current page for pagination
    const setCurrentPages = (pageNo) => {
        setCurrentPage(pageNo);
    }

    // Render: Get items for current page based on filters
    const getFilteredAndPaginatedItems = () => {
        const filtered = items.filter((item) => {
            return item.friendName.toLowerCase().includes(inputData.toLowerCase());
        });

        const indexOfLastFriend = currentPage * itemsPerPage;
        const indexOfFirstFriend = indexOfLastFriend - itemsPerPage;
        return filtered.slice(indexOfFirstFriend, indexOfLastFriend);
    }

    const currentItems = getFilteredAndPaginatedItems();

    // Render: Input component for adding friends
    const RenderInputComp = (
        <input 
            type="text" 
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter your friend's name"
            onKeyPress={(e) => addItem(e)}
            maxLength="50" 
        />
    );

    // Render: Friends list items
    const RenderItemComp = currentItems.map((elem) => {
        return (
            <div className="eachItem" key={elem.id}>
                <div className="friend-info">
                    <h3>{elem.friendName}</h3>
                    <span className="friend-status">
                        {elem.fav === 0 ? '👥 Friend' : '⭐ Close Friend'}
                    </span>
                </div>
                <div className="todo-btn">
                    <button 
                        className="btn-favorite" 
                        title={elem.fav === 0 ? 'Add to favorites' : 'Remove from favorites'}
                        onClick={() => addRemoveFavourite(elem.id)}
                    >
                        <FontAwesomeIcon 
                            icon={faStar} 
                            className={elem.fav === 0 ? 'star-empty' : 'star-filled'} 
                        />
                    </button>
                    <button 
                        className="btn-delete" 
                        title="Delete friend"
                        onClick={() => deleteItem(elem.id)}
                    >
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
            </div>
        )
    })



    const favCount = items.filter(item => item.fav === 1).length;
    const totalCount = items.length;

    return (
        <div className="friend-list-container">
            <div className="friend-list-wrapper">
                {/* Header */}
                <div className="header-div">
                    <h1>Friends List</h1>
                    <p className="subtitle">Manage and organize your friends</p>
                    {totalCount > 0 && (
                        <div className="stats">
                            <span>{totalCount} total • {favCount} close friend{favCount !== 1 ? 's' : ''}</span>
                        </div>
                    )}
                </div>

                {/* Input Section */}
                <div className="addItems">
                    {RenderInputComp}
                </div>

                {/* Items Section */}
                <div className="showItems">
                    {currentItems.length > 0 ? (
                        <>
                            {RenderItemComp}
                        </>
                    ) : (
                        <div className="no-friends">
                            <p>{items.length === 0 ? '👋 No friends added yet. Add your first friend!' : '🔍 No friends match your search.'}</p>
                        </div>
                    )}
                </div>

                {/* Pagination */}
                {items.length > 0 && <Pagination items={items} currentPage={currentPage} parentCallback={setCurrentPages} />}

                {/* Clear All Button */}
                {items.length > 0 && (
                    <div className="clearAll">
                        <button className="btn-clear-all" onClick={clearAllList}>
                            Clear All Friends
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FriendList;