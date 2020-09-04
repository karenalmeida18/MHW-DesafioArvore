import React, { useState } from 'react';

import ListRecompenses from '../../components/ListRecompenses/index';
import NewRecompenseModal from '../../components/ModaisRecompenses/index';
import CategoryModal from '../../components/ModaisRecompenses/category';
import TimeModal from '../../components/ModaisRecompenses/time';
import BooksModal from '../../components/ModaisRecompenses/books';

export default function Recompenses() {
    const [visibleNewRecompense, setVisibleNewRecompense] = useState(false);
    const [visibleCategory, setVisibleCategory] = useState(false);
    const [visibleTime, setVisibleTime] = useState(false);
    const [visibleBooks, setVisibleBooks] = useState(false);


    function openCategory() {
        setVisibleCategory(true);
        setVisibleNewRecompense(false);
        setVisibleTime(false);
        setVisibleBooks(false);
    }
    function openTime() {
        setVisibleCategory(false);
        setVisibleNewRecompense(false);
        setVisibleTime(true);
        setVisibleBooks(false);
    }
    function openBook() {
        setVisibleCategory(false);
        setVisibleNewRecompense(false);
        setVisibleTime(false);
        setVisibleBooks(true);
    }

    return (
        <>
            <ListRecompenses openNewRecompense={() => setVisibleNewRecompense(true)} />

            {visibleNewRecompense && <NewRecompenseModal
                onClose={() => setVisibleNewRecompense(false)}
                openCategory={openCategory}
                openTime={openTime}
                openBook={openBook} />
            }

            {visibleCategory && <CategoryModal onClose={() => setVisibleCategory(false)} />}
            {visibleTime && <TimeModal onClose={() => setVisibleTime(false)} />}
            {visibleBooks && <BooksModal onClose={() => setVisibleBooks(false)} />}

        </>
    );
}
