/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            borderWidth: {
                DEFAULT: "2px",
            },
            borderColor: {
                DEFAULT: "var(--foreground)",
            },
            typography: {
                DEFAULT: {
                    css: {
                        h1: {
                            borderBottom: "1px solid var(--foreground)",
                            fontFamily: "var(--font-berkeley-mono)",
                            fontSize: "var(--text-md)",
                            width: "100%",
                            // color: "var(--destructive)",
                            // lineHeight: "2.5rem",
                            textTransform: "uppercase",
                            // fontWeight: "700",
                        },
                        h2: {
                            borderBottom: "1px solid var(--foreground)",
                            fontFamily: "var(--font-berkeley-mono)",
                            fontSize: "var(--text-sm)",
                            width: "100%",
                            // color: "var(--destructive)",
                            // lineHeight: "2.5rem",
                            textTransform: "uppercase",
                            // fontWeight: "700",
                        },
                        h3: {
                            fontFamily: "var(--font-berkeley-mono)",
                            fontSize: "var(--text-xs)",

                            width: "100%",
                            // color: "var(--destructive)",
                            // lineHeight: "2.5rem",
                            textTransform: "lowercase",
                            // fontWeight: "700",
                        },
                        // color: "#333",
                        a: {
                            color: "#3182ce",
                            "&:hover": {
                                color: "#2c5282",
                            },
                        },
                        ul: {
                            display: "flex",
                            fontSize: "var(--text-xs)",
                            color: "var(--foreground)",
                            gap: "4px",
                            justifyContent: "flex-start",
                            listDecoration: "none",
                            fontFamily: "var(--font-berkeley-mono)",
                            listStyle: "none",
                            textTransform: "uppercase",
                            padding: "0 !important",
                        },
                        "ul > li": {
                            // Selector for li that is a child of an unordered list
                            maxWidth: "fit-content",
                            backgroundColor: "var(--primary)",
                            padding: "1px 2px",
                            border: "2px solid var(--foreground)",
                        },
                        "ol > li": {
                            // Selector for li that is a child of an unordered list
                            padding: "0 !important",
                            margin: "0 !important",
                            maxWidth: "fit-content",
                            // backgroundColor: "var(--primary)",
                            padding: "1px 2px",
                            // border: "1px solid var(--foreground)",
                        },
                        strong: {
                            // fontFamily: "var(--font-berkeley-mono)",
                            // fontSize: "var(--text-xs)",
                            // textTransform: "uppercase",
                            color: "var(--primary)",
                            fontWeight: "bold",
                        },
                    },
                },
            },
        },
    },
};
