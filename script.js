document.addEventListener("DOMContentLoaded", () => {

    // Setting the JavaScript for the content across the application 

    const content = [
        {
            id: 1,
            image: "imgs/cam-1.png",
            title: "How To Switch Camera On The Mixer",
            link: "docs/doc-1.docx"
        },
        {
            id: 2,
            image: "imgs/sound-1.png",
            title: "BLANK",
            link: "docs/sample-doc.docx"
        },
        {
            id: 3,
            image: "imgs/comp-1.png",
            title: "BLANK",
            link: "docs/sample-doc.docx"
        },
    ]

    const searchResults = [...new Set(content.map(item => {
        return item
    }))]

    document.getElementById("search-box").addEventListener("keyup", (e) => {
        const searchData = e.target.value.toLowerCase();
        const filterData = searchResults.filter((item) => {
            return (
                item.title.toLocaleLowerCase().includes(searchData)
            )
        })
        displayContent(filterData)
    });

    const displayContent = (items) => {
        document.getElementById("content-sec").innerHTML=items.map((item) => {
            var {image, title, link} = item;
            return (
                `<div class="content">
                    <img src=${image} class="content-img" alt="Computer Image">
                    <div class="content-text-box">
                        <p class="content-title">${title}</p>
                        <ul class="content-attributes">
                            <a href=${link} download><li class="content-attribute"> Download <i class="fa-solid fa-file-arrow-down"></i></li></a>
                        </ul>
                    </div>
                </div>`
            )
        }).join("")
    };

    displayContent(searchResults);

});

