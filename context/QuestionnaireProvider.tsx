import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Measurements {
    men: null | {
        chest: number;
        waist: number;
    };
    women: null | {
        bust?: number;
        waist?: number;
        hip?: number;
    };
}

interface QuestionnaireContextType {
    gender: string | null;
    age_group: string | null ;
    preferred_brands: string[];
    price_range: string;
    measurements: Measurements | null;
    fit: string | null;
    location: string;
    updateQuestionnaire: (newData: Partial<QuestionnaireContextType>) => void;
}

const defaultState: QuestionnaireContextType = {
    gender: null,
    age_group: null,
    preferred_brands: [],
    price_range: '',
    measurements: {
        men: {
            chest: 40,
            waist: 32
        },
        women: null,
    },
    fit: 'True to Size',
    location: '',
    updateQuestionnaire: () => {},
};

const QuestionnaireContext = createContext<QuestionnaireContextType>(defaultState);

export const useQuestionnaire = () => useContext(QuestionnaireContext);

export const QuestionnaireProvider = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState<QuestionnaireContextType>(defaultState);

    const updateQuestionnaire = (newData: Partial<QuestionnaireContextType>) => {
        setState((prevState) => ({
            ...prevState,
            ...newData,
        }));
    };

    return (
        <QuestionnaireContext.Provider value={{ ...state, updateQuestionnaire }}>
            {children}
        </QuestionnaireContext.Provider>
    );
};
