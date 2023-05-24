
import React, { useEffect, useState, useMemo } from "react";
import { createBrowserHistory } from "history";
import Pagination from "../Pagination";
import data from "./data/snippets.json";
import AddSnippetForm from "../components/AddSnippetForm";
import "../styles/SnippetTable.css";


let PageSize = 10;

const SnippetsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [snippet, setSnippet] = useState([]);
    const [selectedSnippet, setSelectedSnippet] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [sortBy, setSortBy] = useState(""); // New state for sorting
    const history = createBrowserHistory();
    const [isOpen, setIsOpen] = useState(false); // New state for dropdown
    const [searchCriterion, setSearchCriterion] = useState("");
    const [searchKeyword, setSearchKeyword] = useState("");

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;

        let sortedData = [...data]; // Copy the original data

        if (sortBy === "title") {
            sortedData.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortBy === "creationDate") {
            sortedData.sort(
                (a, b) => new Date(a.creationDate) - new Date(b.creationDate)
            );
        }

        return sortedData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, sortBy]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      
  useEffect(() => {
    fetch("/api/snippets")
      .then((response) => response.json())
      .then((data) => setSnippet(data))
      .catch((error) => console.error(error));
  }, []);
  const handleSearch = () => {
  // Perform the search based on the selected criterion and keyword
  // Update the data or apply filters based on the search results
};
    const handleEditSnippet = (id, updateSnippet) => {
        fetch(`/api/snippets/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateSnippet),
        })
            .then((response) => response.json())
            .then((data) => {
                setSnippet((prevSnippet) =>
                    prevSnippet.map((snippet) => (snippet.id === id ? data : snippet))
                );
                setSelectedSnippet(null);
            })
            .catch((error) => console.error(error));
        window.location.reload();
    };

    const handleDeleteSnippet = (id) => {
        fetch(`/api/snippets/${id}`, { method: "DELETE" })
            .then(() => {
                setSnippet((prevSnippet) =>
                    prevSnippet.filter((snippet) => snippet.id !== id)
                );
            })
            .catch((error) => console.error(error));


    }

    const handleSelectSnippet = (snippet) => {
        setSelectedSnippet(snippet);
    };

    const handleShowAddForm = () => {

        setShowAddForm(!showAddForm);
    }

    const handleCanselAddForm = () => {
        setShowAddForm(false);
        window.location.reload();

    }

    const handleSaveSnippet = (snippet) => {
        fetch('/api/snippets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(snippet),
        })
            .then((response) => response.json())
            .then((data) => {
                setSnippet([...snippet, data]);
                setShowAddForm(false);
            })
            .catch((error) => console.error(error));
    };

    if (showAddForm) {
        return (
            <div>
                <AddSnippetForm onSave={handleSaveSnippet} onCancel={handleCanselAddForm} />
            </div>
        );
    }

    if (selectedSnippet) {
        return (
            <div>
                <AddSnippetForm snippet={selectedSnippet} onSave={(updateSnippet) => handleEditSnippet(selectedSnippet.id, updateSnippet)} />
            </div>
        );
    }

    return (
        <>
        <h1>Snippets Table</h1>    
         {/* Filter section */}
         <div className="filter-container">
                <button
                    className={`filter-button ${isOpen ? "open" : ""}`}
                    onClick={toggleDropdown}
                >
                    Sort By
                    <span className="arrow">▾</span>
                </button>
                {isOpen && (
                    <ul className="dropdown">
                        <li onClick={() => setSortBy("title")}>Title</li>
                        <li onClick={() => setSortBy("creationDate")}>Creation Date</li>
                    </ul>
                )}
            </div>     
        <button className='addSnippet' type="submit" onClick={handleShowAddForm}>Add</button>
      <table>
        <thead>
                                      
                <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date of Creation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map(item => {
            return (
              <tr>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.creationDate}</td>
                <td>
                <button className='edit' onClick={() => handleSelectSnippet(item)}>Edit</button>
                <button className='delete' onClick={() => handleDeleteSnippet(item.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
            
            <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
      </>
    );
};

export default SnippetsTable;