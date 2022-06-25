import React from 'react'

export default function Footer() {

    const footerStyle = {
        marginTop: "100px",
        margin:"center",
        padding:"center",
        paddingTop: "40px",
        height: "120px",
        textAlign: "center",
        backgroundColor: "rgb(33 37 41)",
        color: "White",
        fontSize: "12px",
        fontFamily: "Verdana, sans-serif"
    }

    return (
        <footer style={footerStyle}>
            <p>Copyright © To-Do App 2021. All Right Reserved.</p>
            <p>by Tejas Srivastava</p>
        </footer>
    )
}
