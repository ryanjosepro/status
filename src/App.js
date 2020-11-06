import React from 'react';

import { createSimpleStore } from 'react-simple-reducer';

const MyStatus = createSimpleStore(
    {
        count: 0
    },
    {
        increment(state) {
            state.count++;
        },

        descrement(state) {
            state.count--;
        }
    }
)

function App() {
    return (
        <MyStatus.Provider>
            <MyStatus.GetState>
                {
                state => {
                    return(
                    <>
                    <h1>Total: {state.count}</h1>
                    <button>-</button>
                    <button>+</button>
                    </>
                    )
                }
                }
            </MyStatus.GetState>
        </MyStatus.Provider>
    );
}

export default App;