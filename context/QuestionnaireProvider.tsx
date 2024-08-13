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
    age_group: string;
    preferred_brands: string[];
    price_range: string;
    measurements: Measurements;
    fit: string;
    location: string;
    updateQuestionnaire: (newData: Partial<QuestionnaireContextType>) => void;
}

const defaultState: QuestionnaireContextType = {
    gender: null,
    age_group: '',
    preferred_brands: [],
    price_range: '',
    measurements: {
        men: null,
        women: null,
    },
    fit: '',
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
