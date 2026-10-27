export const energy01Data={
  "uk": {
    "source": "https://assets.publishing.service.gov.uk/media/6a6cb6480ddb7e4831c62af3/UK_Energy_in_Brief_2026_dataset.xlsx",
    "release": "3 August 2026",
    "sheet": "Inland energy consumption",
    "unit": "million tonnes of oil equivalent",
    "years": [
      1990,
      2025
    ],
    "rows": [
      [
        "Coal",
        66.9,
        1.22
      ],
      [
        "Oil",
        77.16,
        63.02
      ],
      [
        "Gas",
        51.17,
        57.73
      ],
      [
        "Primary electricity",
        17.740000000000002,
        20.06
      ],
      [
        "Bioenergy & waste",
        0.65,
        20.44
      ],
      [
        "Total",
        213.62000000000003,
        162.47
      ]
    ],
    "xlsxSha256": "be9610cc54af16f1a491bf001210984d42b78452f2a8ea8c353a7495b140e129",
    "note": "Primary electricity groups nuclear, wind, solar, hydro and net imports. Excludes non-energy use. Published rounded source cells; sum may differ from rounded headline."
  },
  "energy": {
    "year": 2022,
    "source": "https://api.worldbank.org/v2/country/USA;IND;GBR;BRA/indicator/EG.USE.PCAP.KG.OE?date=2022&format=json&per_page=100",
    "updated": "2026-10-08",
    "countries": [
      {
        "code": "BRA",
        "name": "Brazil",
        "value": 1440.53287973747
      },
      {
        "code": "GBR",
        "name": "United Kingdom",
        "value": 2249.64929952883
      },
      {
        "code": "IND",
        "name": "India",
        "value": 725.855571748119
      },
      {
        "code": "USA",
        "name": "United States",
        "value": 6512.21129870243
      }
    ]
  },
  "water": {
    "year": 2022,
    "source": "https://unstats.un.org/sdgs/report/2025/Goal-06/",
    "rows": [
      [
        "Agriculture",
        72
      ],
      [
        "Industry",
        15
      ],
      [
        "Services",
        13
      ]
    ]
  },
  "food": {
    "year": 2023,
    "source": "https://www.fao.org/statistics/highlights-archive/highlights-detail/food-balance-sheets-2010-2023/",
    "order": [
      "Europe / Americas / Oceania above world mean",
      "Asia rising towards world mean",
      "Africa lower and largely stagnant"
    ]
  }
};
