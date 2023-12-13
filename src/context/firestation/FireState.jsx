import FireContext from "./FireContext"




const FireState = (props) => {

    const data = "Reddy Anna Aag Suraksha"

    return (
        <FireContext.Provider value={ {data} } >
            {props.children}

        </FireContext.Provider>
    )
}

export default FireState