export default function dropDown(name, parent, prefix) {
    

    // const optionsEl = document.querySelector('.prefix-input');
    const optionsEl = parent;
    let selected;
    let countries = [
        {
            "name": "Bénin",
            "code": "BJ",
            "flag": "/assets/benin.png",
            "prefix": "+229"
        },
        {
            "name": "Mali",
            "code": "ML",
            "flag": "/assets/benin.png",
            "prefix": "+227"
        },
        {
            "name": "Togo",
            "code": "TG",
            "flag": "/assets/benin.png",
            "prefix": "+228"
        }
    ];

    const json = [
        {
          "name": "Afghanistan",
          "prefix": "+93",
          "code": "AF",
          "flag": "https://flagcdn.com/w40/af.png"
        },
        {
          "name": "Afrique du Sud",
          "prefix": "+27",
          "code": "ZA",
          "flag": "https://flagcdn.com/w40/za.png"
        },
        {
          "name": "Albanie",
          "prefix": "+355",
          "code": "AL",
          "flag": "https://flagcdn.com/w40/al.png"
        },
        {
          "name": "Algérie",
          "prefix": "+213",
          "code": "DZ",
          "flag": "https://flagcdn.com/w40/dz.png"
        },
        {
          "name": "Allemagne",
          "prefix": "+49",
          "code": "DE",
          "flag": "https://flagcdn.com/w40/de.png"
        },
        {
          "name": "Andorre",
          "prefix": "+376",
          "code": "AD",
          "flag": "https://flagcdn.com/w40/ad.png"
        },
        {
          "name": "Angola",
          "prefix": "+244",
          "code": "AO",
          "flag": "https://flagcdn.com/w40/ao.png"
        },
        {
          "name": "Antigua-et-Barbuda",
          "prefix": "+1 268",
          "code": "AG",
          "flag": "https://flagcdn.com/w40/ag.png"
        },
        {
          "name": "Arabie saoudite",
          "prefix": "+966",
          "code": "SA",
          "flag": "https://flagcdn.com/w40/sa.png"
        },
        {
          "name": "Argentine",
          "prefix": "+54",
          "code": "AR",
          "flag": "https://flagcdn.com/w40/ar.png"
        },
        {
          "name": "Arménie",
          "prefix": "+374",
          "code": "AM",
          "flag": "https://flagcdn.com/w40/am.png"
        },
        {
          "name": "Australie",
          "prefix": "+61",
          "code": "AU",
          "flag": "https://flagcdn.com/w40/au.png"
        },
        {
          "name": "Autriche",
          "prefix": "+43",
          "code": "AT",
          "flag": "https://flagcdn.com/w40/at.png"
        },
        {
          "name": "Azerbaïdjan",
          "prefix": "+994",
          "code": "AZ",
          "flag": "https://flagcdn.com/w40/az.png"
        },
        {
          "name": "Bahamas",
          "prefix": "+1 242",
          "code": "BS",
          "flag": "https://flagcdn.com/w40/bs.png"
        },
        {
          "name": "Bahreïn",
          "prefix": "+973",
          "code": "BH",
          "flag": "https://flagcdn.com/w40/bh.png"
        },
        {
          "name": "Bangladesh",
          "prefix": "+880",
          "code": "BD",
          "flag": "https://flagcdn.com/w40/bd.png"
        },
        {
          "name": "Barbade",
          "prefix": "+1 246",
          "code": "BB",
          "flag": "https://flagcdn.com/w40/bb.png"
        },
        {
          "name": "Belgique",
          "prefix": "+32",
          "code": "BE",
          "flag": "https://flagcdn.com/w40/be.png"
        },
        {
          "name": "Belize",
          "prefix": "+501",
          "code": "BZ",
          "flag": "https://flagcdn.com/w40/bz.png"
        },
        {
          "name": "Bénin",
          "prefix": "+229",
          "code": "BJ",
          "flag": "https://flagcdn.com/w40/bj.png"
        },
        {
          "name": "Bhoutan",
          "prefix": "+975",
          "code": "BT",
          "flag": "https://flagcdn.com/w40/bt.png"
        },
        {
          "name": "Biélorussie",
          "prefix": "+375",
          "code": "BY",
          "flag": "https://flagcdn.com/w40/by.png"
        },
        {
          "name": "Birmanie (Myanmar)",
          "prefix": "+95",
          "code": "MM",
          "flag": "https://flagcdn.com/w40/mm.png"
        },
        {
          "name": "Bolivie",
          "prefix": "+591",
          "code": "BO",
          "flag": "https://flagcdn.com/w40/bo.png"
        },
        {
          "name": "Bosnie-Herzégovine",
          "prefix": "+387",
          "code": "BA",
          "flag": "https://flagcdn.com/w40/ba.png"
        },
        {
          "name": "Botswana",
          "prefix": "+267",
          "code": "BW",
          "flag": "https://flagcdn.com/w40/bw.png"
        },
        {
          "name": "Brésil",
          "prefix": "+55",
          "code": "BR",
          "flag": "https://flagcdn.com/w40/br.png"
        },
        {
          "name": "Brunei",
          "prefix": "+673",
          "code": "BN",
          "flag": "https://flagcdn.com/w40/bn.png"
        },
        {
          "name": "Bulgarie",
          "prefix": "+359",
          "code": "BG",
          "flag": "https://flagcdn.com/w40/bg.png"
        },
        {
          "name": "Burkina Faso",
          "prefix": "+226",
          "code": "BF",
          "flag": "https://flagcdn.com/w40/bf.png"
        },
        {
          "name": "Burundi",
          "prefix": "+257",
          "code": "BI",
          "flag": "https://flagcdn.com/w40/bi.png"
        },
        {
          "name": "Cambodge",
          "prefix": "+855",
          "code": "KH",
          "flag": "https://flagcdn.com/w40/kh.png"
        },
        {
          "name": "Cameroun",
          "prefix": "+237",
          "code": "CM",
          "flag": "https://flagcdn.com/w40/cm.png"
        },
        {
          "name": "Canada",
          "prefix": "+1",
          "code": "CA",
          "flag": "https://flagcdn.com/w40/ca.png"
        },
        {
          "name": "Cap-Vert",
          "prefix": "+238",
          "code": "CV",
          "flag": "https://flagcdn.com/w40/cv.png"
        },
        {
          "name": "République centrafricaine",
          "prefix": "+236",
          "code": "CF",
          "flag": "https://flagcdn.com/w40/cf.png"
        },
        {
          "name": "Chili",
          "prefix": "+56",
          "code": "CL",
          "flag": "https://flagcdn.com/w40/cl.png"
        },
        {
          "name": "Chine",
          "prefix": "+86",
          "code": "CN",
          "flag": "https://flagcdn.com/w40/cn.png"
        },
        {
          "name": "Chypre",
          "prefix": "+357",
          "code": "CY",
          "flag": "https://flagcdn.com/w40/cy.png"
        },
        {
          "name": "Colombie",
          "prefix": "+57",
          "code": "CO",
          "flag": "https://flagcdn.com/w40/co.png"
        },
        {
          "name": "Comores",
          "prefix": "+269",
          "code": "KM",
          "flag": "https://flagcdn.com/w40/km.png"
        },
        {
          "name": "Congo (République démocratique)",
          "prefix": "+243",
          "code": "CD",
          "flag": "https://flagcdn.com/w40/cd.png"
        },
        {
          "name": "Congo (République)",
          "prefix": "+242",
          "code": "CG",
          "flag": "https://flagcdn.com/w40/cg.png"
        },
        {
          "name": "Corée du Nord",
          "prefix": "+850",
          "code": "KP",
          "flag": "https://flagcdn.com/w40/kp.png"
        },
        {
          "name": "Corée du Sud",
          "prefix": "+82",
          "code": "KR",
          "flag": "https://flagcdn.com/w40/kr.png"
        },
        {
          "name": "Costa Rica",
          "prefix": "+506",
          "code": "CR",
          "flag": "https://flagcdn.com/w40/cr.png"
        },
        {
          "name": "Côte d'Ivoire",
          "prefix": "+225",
          "code": "CI",
          "flag": "https://flagcdn.com/w40/ci.png"
        },
        {
          "name": "Croatie",
          "prefix": "+385",
          "code": "HR",
          "flag": "https://flagcdn.com/w40/hr.png"
        },
        {
          "name": "Cuba",
          "prefix": "+53",
          "code": "CU",
          "flag": "https://flagcdn.com/w40/cu.png"
        },
        {
          "name": "Danemark",
          "prefix": "+45",
          "code": "DK",
          "flag": "https://flagcdn.com/w40/dk.png"
        },
        {
          "name": "Djibouti",
          "prefix": "+253",
          "code": "DJ",
          "flag": "https://flagcdn.com/w40/dj.png"
        },
        {
          "name": "Dominique",
          "prefix": "+1 767",
          "code": "DM",
          "flag": "https://flagcdn.com/w40/dm.png"
        },
        {
          "name": "Égypte",
          "prefix": "+20",
          "code": "EG",
          "flag": "https://flagcdn.com/w40/eg.png"
        },
        {
          "name": "Émirats arabes unis",
          "prefix": "+971",
          "code": "AE",
          "flag": "https://flagcdn.com/w40/ae.png"
        },
        {
          "name": "Équateur",
          "prefix": "+593",
          "code": "EC",
          "flag": "https://flagcdn.com/w40/ec.png"
        },
        {
          "name": "Érythrée",
          "prefix": "+291",
          "code": "ER",
          "flag": "https://flagcdn.com/w40/er.png"
        },
        {
          "name": "Espagne",
          "prefix": "+34",
          "code": "ES",
          "flag": "https://flagcdn.com/w40/es.png"
        },
        {
          "name": "Estonie",
          "prefix": "+372",
          "code": "EE",
          "flag": "https://flagcdn.com/w40/ee.png"
        },
        {
          "name": "États-Unis",
          "prefix": "+1",
          "code": "US",
          "flag": "https://flagcdn.com/w40/us.png"
        },
        {
          "name": "Éthiopie",
          "prefix": "+251",
          "code": "ET",
          "flag": "https://flagcdn.com/w40/et.png"
        },
        {
          "name": "Fidji",
          "prefix": "+679",
          "code": "FJ",
          "flag": "https://flagcdn.com/w40/fj.png"
        },
        {
          "name": "Finlande",
          "prefix": "+358",
          "code": "FI",
          "flag": "https://flagcdn.com/w40/fi.png"
        },
        {
          "name": "France",
          "prefix": "+33",
          "code": "FR",
          "flag": "https://flagcdn.com/w40/fr.png"
        },
        {
          "name": "Gabon",
          "prefix": "+241",
          "code": "GA",
          "flag": "https://flagcdn.com/w40/ga.png"
        },
        {
          "name": "Gambie",
          "prefix": "+220",
          "code": "GM",
          "flag": "https://flagcdn.com/w40/gm.png"
        },
        {
          "name": "Géorgie",
          "prefix": "+995",
          "code": "GE",
          "flag": "https://flagcdn.com/w40/ge.png"
        },
        {
          "name": "Ghana",
          "prefix": "+233",
          "code": "GH",
          "flag": "https://flagcdn.com/w40/gh.png"
        },
        {
          "name": "Grèce",
          "prefix": "+30",
          "code": "GR",
          "flag": "https://flagcdn.com/w40/gr.png"
        },
        {
          "name": "Grenade",
          "prefix": "+1 473",
          "code": "GD",
          "flag": "https://flagcdn.com/w40/gd.png"
        },
        {
          "name": "Guatemala",
          "prefix": "+502",
          "code": "GT",
          "flag": "https://flagcdn.com/w40/gt.png"
        },
        {
          "name": "Guinée",
          "prefix": "+224",
          "code": "GN",
          "flag": "https://flagcdn.com/w40/gn.png"
        },
        {
          "name": "Guinée-Bissau",
          "prefix": "+245",
          "code": "GW",
          "flag": "https://flagcdn.com/w40/gw.png"
        },
        {
          "name": "Guinée équatoriale",
          "prefix": "+240",
          "code": "GQ",
          "flag": "https://flagcdn.com/w40/gq.png"
        },
        {
          "name": "Guyana",
          "prefix": "+592",
          "code": "GY",
          "flag": "https://flagcdn.com/w40/gy.png"
        },
        {
          "name": "Haïti",
          "prefix": "+509",
          "code": "HT",
          "flag": "https://flagcdn.com/w40/ht.png"
        },
        {
          "name": "Honduras",
          "prefix": "+504",
          "code": "HN",
          "flag": "https://flagcdn.com/w40/hn.png"
        },
        {
          "name": "Hongrie",
          "prefix": "+36",
          "code": "HU",
          "flag": "https://flagcdn.com/w40/hu.png"
        },
        {
          "name": "Inde",
          "prefix": "+91",
          "code": "IN",
          "flag": "https://flagcdn.com/w40/in.png"
        },
        {
          "name": "Indonésie",
          "prefix": "+62",
          "code": "ID",
          "flag": "https://flagcdn.com/w40/id.png"
        },
        {
          "name": "Irak",
          "prefix": "+964",
          "code": "IQ",
          "flag": "https://flagcdn.com/w40/iq.png"
        },
        {
          "name": "Iran",
          "prefix": "+98",
          "code": "IR",
          "flag": "https://flagcdn.com/w40/ir.png"
        },
        {
          "name": "Irlande",
          "prefix": "+353",
          "code": "IE",
          "flag": "https://flagcdn.com/w40/ie.png"
        },
        {
          "name": "Islande",
          "prefix": "+354",
          "code": "IS",
          "flag": "https://flagcdn.com/w40/is.png"
        },
        {
          "name": "Israël",
          "prefix": "+972",
          "code": "IL",
          "flag": "https://flagcdn.com/w40/il.png"
        },
        {
          "name": "Italie",
          "prefix": "+39",
          "code": "IT",
          "flag": "https://flagcdn.com/w40/it.png"
        },
        {
          "name": "Jamaïque",
          "prefix": "+1 876",
          "code": "JM",
          "flag": "https://flagcdn.com/w40/jm.png"
        },
        {
          "name": "Japon",
          "prefix": "+81",
          "code": "JP",
          "flag": "https://flagcdn.com/w40/jp.png"
        },
        {
          "name": "Jordanie",
          "prefix": "+962",
          "code": "JO",
          "flag": "https://flagcdn.com/w40/jo.png"
        },
        {
          "name": "Kazakhstan",
          "prefix": "+7",
          "code": "KZ",
          "flag": "https://flagcdn.com/w40/kz.png"
        },
        {
          "name": "Kenya",
          "prefix": "+254",
          "code": "KE",
          "flag": "https://flagcdn.com/w40/ke.png"
        },
        {
          "name": "Kirghizistan",
          "prefix": "+996",
          "code": "KG",
          "flag": "https://flagcdn.com/w40/kg.png"
        },
        {
          "name": "Kiribati",
          "prefix": "+686",
          "code": "KI",
          "flag": "https://flagcdn.com/w40/ki.png"
        },
        {
          "name": "Koweït",
          "prefix": "+965",
          "code": "KW",
          "flag": "https://flagcdn.com/w40/kw.png"
        },
        {
          "name": "Laos",
          "prefix": "+856",
          "code": "LA",
          "flag": "https://flagcdn.com/w40/la.png"
        },
        {
          "name": "Lesotho",
          "prefix": "+266",
          "code": "LS",
          "flag": "https://flagcdn.com/w40/ls.png"
        },
        {
          "name": "Lettonie",
          "prefix": "+371",
          "code": "LV",
          "flag": "https://flagcdn.com/w40/lv.png"
        },
        {
          "name": "Liban",
          "prefix": "+961",
          "code": "LB",
          "flag": "https://flagcdn.com/w40/lb.png"
        },
        {
          "name": "Liberia",
          "prefix": "+231",
          "code": "LR",
          "flag": "https://flagcdn.com/w40/lr.png"
        },
        {
          "name": "Libye",
          "prefix": "+218",
          "code": "LY",
          "flag": "https://flagcdn.com/w40/ly.png"
        },
        {
          "name": "Liechtenstein",
          "prefix": "+423",
          "code": "LI",
          "flag": "https://flagcdn.com/w40/li.png"
        },
        {
          "name": "Lituanie",
          "prefix": "+370",
          "code": "LT",
          "flag": "https://flagcdn.com/w40/lt.png"
        },
        {
          "name": "Luxembourg",
          "prefix": "+352",
          "code": "LU",
          "flag": "https://flagcdn.com/w40/lu.png"
        },
        {
          "name": "Macédoine du Nord",
          "prefix": "+389",
          "code": "MK",
          "flag": "https://flagcdn.com/w40/mk.png"
        },
        {
          "name": "Madagascar",
          "prefix": "+261",
          "code": "MG",
          "flag": "https://flagcdn.com/w40/mg.png"
        },
        {
          "name": "Malaisie",
          "prefix": "+60",
          "code": "MY",
          "flag": "https://flagcdn.com/w40/my.png"
        },
        {
          "name": "Malawi",
          "prefix": "+265",
          "code": "MW",
          "flag": "https://flagcdn.com/w40/mw.png"
        },
        {
          "name": "Maldives",
          "prefix": "+960",
          "code": "MV",
          "flag": "https://flagcdn.com/w40/mv.png"
        },
        {
          "name": "Mali",
          "prefix": "+223",
          "code": "ML",
          "flag": "https://flagcdn.com/w40/ml.png"
        },
        {
          "name": "Malte",
          "prefix": "+356",
          "code": "MT",
          "flag": "https://flagcdn.com/w40/mt.png"
        },
        {
          "name": "Maroc",
          "prefix": "+212",
          "code": "MA",
          "flag": "https://flagcdn.com/w40/ma.png"
        },
        {
          "name": "Marshall (Îles)",
          "prefix": "+692",
          "code": "MH",
          "flag": "https://flagcdn.com/w40/mh.png"
        },
        {
          "name": "Maurice",
          "prefix": "+230",
          "code": "MU",
          "flag": "https://flagcdn.com/w40/mu.png"
        },
        {
          "name": "Mauritanie",
          "prefix": "+222",
          "code": "MR",
          "flag": "https://flagcdn.com/w40/mr.png"
        },
        {
          "name": "Mexique",
          "prefix": "+52",
          "code": "MX",
          "flag": "https://flagcdn.com/w40/mx.png"
        },
        {
          "name": "Micronésie",
          "prefix": "+691",
          "code": "FM",
          "flag": "https://flagcdn.com/w40/fm.png"
        },
        {
          "name": "Moldavie",
          "prefix": "+373",
          "code": "MD",
          "flag": "https://flagcdn.com/w40/md.png"
        },
        {
          "name": "Monaco",
          "prefix": "+377",
          "code": "MC",
          "flag": "https://flagcdn.com/w40/mc.png"
        },
        {
          "name": "Mongolie",
          "prefix": "+976",
          "code": "MN",
          "flag": "https://flagcdn.com/w40/mn.png"
        },
        {
          "name": "Monténégro",
          "prefix": "+382",
          "code": "ME",
          "flag": "https://flagcdn.com/w40/me.png"
        },
        {
          "name": "Mozambique",
          "prefix": "+258",
          "code": "MZ",
          "flag": "https://flagcdn.com/w40/mz.png"
        },
        {
          "name": "Namibie",
          "prefix": "+264",
          "code": "NA",
          "flag": "https://flagcdn.com/w40/na.png"
        },
        {
          "name": "Nauru",
          "prefix": "+674",
          "code": "NR",
          "flag": "https://flagcdn.com/w40/nr.png"
        },
        {
          "name": "Népal",
          "prefix": "+977",
          "code": "NP",
          "flag": "https://flagcdn.com/w40/np.png"
        },
        {
          "name": "Nicaragua",
          "prefix": "+505",
          "code": "NI",
          "flag": "https://flagcdn.com/w40/ni.png"
        },
        {
          "name": "Niger",
          "prefix": "+227",
          "code": "NE",
          "flag": "https://flagcdn.com/w40/ne.png"
        },
        {
          "name": "Nigéria",
          "prefix": "+234",
          "code": "NG",
          "flag": "https://flagcdn.com/w40/ng.png"
        },
        {
          "name": "Norvège",
          "prefix": "+47",
          "code": "NO",
          "flag": "https://flagcdn.com/w40/no.png"
        },
        {
          "name": "Nouvelle-Zélande",
          "prefix": "+64",
          "code": "NZ",
          "flag": "https://flagcdn.com/w40/nz.png"
        },
        {
          "name": "Oman",
          "prefix": "+968",
          "code": "OM",
          "flag": "https://flagcdn.com/w40/om.png"
        },
        {
          "name": "Ouganda",
          "prefix": "+256",
          "code": "UG",
          "flag": "https://flagcdn.com/w40/ug.png"
        },
        {
          "name": "Ouzbékistan",
          "prefix": "+998",
          "code": "UZ",
          "flag": "https://flagcdn.com/w40/uz.png"
        },
        {
          "name": "Pakistan",
          "prefix": "+92",
          "code": "PK",
          "flag": "https://flagcdn.com/w40/pk.png"
        },
        {
          "name": "Palaos",
          "prefix": "+680",
          "code": "PW",
          "flag": "https://flagcdn.com/w40/pw.png"
        },
        {
          "name": "Panama",
          "prefix": "+507",
          "code": "PA",
          "flag": "https://flagcdn.com/w40/pa.png"
        },
        {
          "name": "Papouasie-Nouvelle-Guinée",
          "prefix": "+675",
          "code": "PG",
          "flag": "https://flagcdn.com/w40/pg.png"
        },
        {
          "name": "Paraguay",
          "prefix": "+595",
          "code": "PY",
          "flag": "https://flagcdn.com/w40/py.png"
        },
        {
          "name": "Pays-Bas",
          "prefix": "+31",
          "code": "NL",
          "flag": "https://flagcdn.com/w40/nl.png"
        },
        {
          "name": "Pérou",
          "prefix": "+51",
          "code": "PE",
          "flag": "https://flagcdn.com/w40/pe.png"
        },
        {
          "name": "Philippines",
          "prefix": "+63",
          "code": "PH",
          "flag": "https://flagcdn.com/w40/ph.png"
        },
        {
          "name": "Pologne",
          "prefix": "+48",
          "code": "PL",
          "flag": "https://flagcdn.com/w40/pl.png"
        },
        {
          "name": "Portugal",
          "prefix": "+351",
          "code": "PT",
          "flag": "https://flagcdn.com/w40/pt.png"
        },
        {
          "name": "Qatar",
          "prefix": "+974",
          "code": "QA",
          "flag": "https://flagcdn.com/w40/qa.png"
        },
        {
          "name": "Roumanie",
          "prefix": "+40",
          "code": "RO",
          "flag": "https://flagcdn.com/w40/ro.png"
        },
        {
          "name": "Royaume-Uni",
          "prefix": "+44",
          "code": "GB",
          "flag": "https://flagcdn.com/w40/gb.png"
        },
        {
          "name": "Russie",
          "prefix": "+7",
          "code": "RU",
          "flag": "https://flagcdn.com/w40/ru.png"
        },
        {
          "name": "Rwanda",
          "prefix": "+250",
          "code": "RW",
          "flag": "https://flagcdn.com/w40/rw.png"
        },
        {
          "name": "Saint-Christophe-et-Niévès",
          "prefix": "+1 869",
          "code": "KN",
          "flag": "https://flagcdn.com/w40/kn.png"
        },
        {
          "name": "Sainte-Lucie",
          "prefix": "+1 758",
          "code": "LC",
          "flag": "https://flagcdn.com/w40/lc.png"
        },
        {
          "name": "Saint-Vincent-et-les-Grenadines",
          "prefix": "+1 784",
          "code": "VC",
          "flag": "https://flagcdn.com/w40/vc.png"
        },
        {
          "name": "Salomon (Îles)",
          "prefix": "+677",
          "code": "SB",
          "flag": "https://flagcdn.com/w40/sb.png"
        },
        {
          "name": "Salvador",
          "prefix": "+503",
          "code": "SV",
          "flag": "https://flagcdn.com/w40/sv.png"
        },
        {
          "name": "Samoa",
          "prefix": "+685",
          "code": "WS",
          "flag": "https://flagcdn.com/w40/ws.png"
        },
        {
          "name": "Saint-Marin",
          "prefix": "+378",
          "code": "SM",
          "flag": "https://flagcdn.com/w40/sm.png"
        },
        {
          "name": "Sao Tomé-et-Principe",
          "prefix": "+239",
          "code": "ST",
          "flag": "https://flagcdn.com/w40/st.png"
        },
        {
          "name": "Sénégal",
          "prefix": "+221",
          "code": "SN",
          "flag": "https://flagcdn.com/w40/sn.png"
        },
        {
          "name": "Serbie",
          "prefix": "+381",
          "code": "RS",
          "flag": "https://flagcdn.com/w40/rs.png"
        },
        {
          "name": "Seychelles",
          "prefix": "+248",
          "code": "SC",
          "flag": "https://flagcdn.com/w40/sc.png"
        },
        {
          "name": "Sierra Leone",
          "prefix": "+232",
          "code": "SL",
          "flag": "https://flagcdn.com/w40/sl.png"
        },
        {
          "name": "Singapour",
          "prefix": "+65",
          "code": "SG",
          "flag": "https://flagcdn.com/w40/sg.png"
        },
        {
          "name": "Slovaquie",
          "prefix": "+421",
          "code": "SK",
          "flag": "https://flagcdn.com/w40/sk.png"
        },
        {
          "name": "Slovénie",
          "prefix": "+386",
          "code": "SI",
          "flag": "https://flagcdn.com/w40/si.png"
        },
        {
          "name": "Somalie",
          "prefix": "+252",
          "code": "SO",
          "flag": "https://flagcdn.com/w40/so.png"
        },
        {
          "name": "Soudan",
          "prefix": "+249",
          "code": "SD",
          "flag": "https://flagcdn.com/w40/sd.png"
        },
        {
          "name": "Soudan du Sud",
          "prefix": "+211",
          "code": "SS",
          "flag": "https://flagcdn.com/w40/ss.png"
        },
        {
          "name": "Sri Lanka",
          "prefix": "+94",
          "code": "LK",
          "flag": "https://flagcdn.com/w40/lk.png"
        },
        {
          "name": "Suède",
          "prefix": "+46",
          "code": "SE",
          "flag": "https://flagcdn.com/w40/se.png"
        },
        {
          "name": "Suisse",
          "prefix": "+41",
          "code": "CH",
          "flag": "https://flagcdn.com/w40/ch.png"
        },
        {
          "name": "Suriname",
          "prefix": "+597",
          "code": "SR",
          "flag": "https://flagcdn.com/w40/sr.png"
        },
        {
          "name": "Syrie",
          "prefix": "+963",
          "code": "SY",
          "flag": "https://flagcdn.com/w40/sy.png"
        },
        {
          "name": "Tadjikistan",
          "prefix": "+992",
          "code": "TJ",
          "flag": "https://flagcdn.com/w40/tj.png"
        },
        {
          "name": "Tanzanie",
          "prefix": "+255",
          "code": "TZ",
          "flag": "https://flagcdn.com/w40/tz.png"
        },
        {
          "name": "Tchad",
          "prefix": "+235",
          "code": "TD",
          "flag": "https://flagcdn.com/w40/td.png"
        },
        {
          "name": "Tchéquie",
          "prefix": "+420",
          "code": "CZ",
          "flag": "https://flagcdn.com/w40/cz.png"
        },
        {
          "name": "Thaïlande",
          "prefix": "+66",
          "code": "TH",
          "flag": "https://flagcdn.com/w40/th.png"
        },
        {
          "name": "Timor oriental",
          "prefix": "+670",
          "code": "TL",
          "flag": "https://flagcdn.com/w40/tl.png"
        },
        {
          "name": "Togo",
          "prefix": "+228",
          "code": "TG",
          "flag": "https://flagcdn.com/w40/tg.png"
        },
        {
          "name": "Tonga",
          "prefix": "+676",
          "code": "TO",
          "flag": "https://flagcdn.com/w40/to.png"
        }
    ];


    let selectEl = document.createElement('select');
    let flagIcon = document.createElement('img');
    flagIcon.setAttribute("alt", "Flag Icon");
    flagIcon.classList = "Image Flag";
    flagIcon.setAttribute("src", countries[0].flag);
    countries = json;


    for (let countrie of countries) {
        selectEl.name = name;
        selectEl.id = name;
        let option = document.createElement('option');
        option.setAttribute('value', countrie.name);
        option.setAttribute('id', countrie.prefix);
        option.innerText = countrie.name;
        
        selectEl.appendChild(option);
        optionsEl.append(flagIcon);
        optionsEl.appendChild(selectEl);
    };

    let  selected1;
    selectEl.addEventListener('change', () => {
        selected = selectEl.value;
        console.log({ selected });

        selected1 = countries.filter((countrie) => countrie.name === selected);
        console.log(selected1);
        flagIcon.src = selected1[0].flag;
        prefix.innerText = selected1[0].prefix;
        console.log(selected1[0].flag);
        prefix.value = selected1[0].name;
    });

    console.log(json);
    console.log('Country selector setup !')
    return  selected1;
};