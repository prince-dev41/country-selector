
function dropDown(name, parent, prefix) {

    // const optionsEl = document.querySelector('.prefix-input');
    const optionsEl = parent;
    let selected;
    const countries = [
        {
            "name": "Bénin",
            "flag": "/assets/benin.png",
            "prefix": "+229"
        },
        {
            "name": "Mali",
            "flag": "/assets/benin.png",
            "prefix": "+227"
        },
        {
            "name": "Togo",
            "flag": "/assets/benin.png",
            "prefix": "+228"
        }
    ];

    let selectEl = document.createElement('select');
    let flagIcon = document.createElement('img');
    flagIcon.setAttribute("alt", "Flag Icon");
    flagIcon.classList = "Image Flag";
    flagIcon.setAttribute("src", countries[0].flag);

    for (let countrie of countries) {
        selectEl.name = name;
        selectEl.id = name;
        let option = document.createElement('option');
        option.setAttribute('value', countrie.name);
        option.setAttribute('id', countrie.prefix);
        option.innerText = countrie.name;
        let opt = document.createElement("div");
        let img = document.createElement('img');
        img.src = countrie.flag;
        opt.appendChild(option);
        opt.appendChild(img);
        // console.log({opt})
        
        selectEl.appendChild(opt);
        optionsEl.append(flagIcon);
        optionsEl.appendChild(selectEl);
        // console.log(option);
        // console.log(optionsEl);
    };

    selectEl.addEventListener('change', () => {
        selected = selectEl.value;
        console.log(e);
        console.log({ selected })

        let selected1 = countries.filter((countrie) => countrie.name === selected);
        console.log(selected1);
        flagIcon.src = selected1[0].flag;
        prefix.innerText = selected1[0].prefix;
        networkName.value = selected1[0].name;
        console.log(selected1[0].flag);
    });
}