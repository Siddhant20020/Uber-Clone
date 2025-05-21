import React, { useState, useEffect } from 'react';

const LocationSearchPanel = ({
    setVehiclePanel,
    setPanelOpen,
    setPickup,
    setDestination,
    activeField,
    pickup,
    destination
}) => {
    const [query, setQuery] = useState('');

    // Sync input query with current pickup or destination prop
    useEffect(() => {
        if (activeField === 'pickup') {
            setQuery(pickup || '');
        } else if (activeField === 'destination') {
            setQuery(destination || '');
        }
    }, [activeField, pickup, destination]);

    const [suggestions, setSuggestions] = useState([]);

    const fetchSuggestions = async (searchTerm) => {
        if (!searchTerm) {
            setSuggestions([]);
            return;
        }

        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(searchTerm)}&format=json&limit=5`
            );
            const data = await response.json();
            const suggestionList = data.map((item) => item.display_name);
            setSuggestions(suggestionList);
        } catch (error) {
            console.error('Error fetching suggestions:', error);
            setSuggestions([]);
        }
    };

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            fetchSuggestions(query);
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    const handleSuggestionClick = (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
        } else if (activeField === 'destination') {
            setDestination(suggestion);
        }

        setPanelOpen(false);
        setVehiclePanel(true);
    };

    return (
        <div className="p-4">
            <input
                className="w-full border border-gray-300 p-3 rounded-lg mb-4"
                type="text"
                placeholder={`Search for ${activeField} location`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
            />

            {suggestions.length === 0 ? (
                <p className="text-gray-500">No suggestions found.</p>
            ) : (
                suggestions.map((elem, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleSuggestionClick(elem)}
                        className="flex gap-4 border p-3 hover:border-black rounded-xl items-center my-2 cursor-pointer"
                    >
                        <div className="bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full">
                            <i className="ri-map-pin-fill"></i>
                        </div>
                        <p className="text-sm">{elem}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default LocationSearchPanel;
