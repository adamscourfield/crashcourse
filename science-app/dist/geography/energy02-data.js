export const energy02Data={
  "checked": "2026-10-27",
  "sources": [
    {
      "id": "india",
      "url": "https://www.eia.gov/international/content/analysis/countries_long/India/",
      "sha256": "8ae838871ce1d4cb7b91fc74c3cf0b5536bf6759b1d0d6fc14591c9e1f40bbc4",
      "retrieved": "2026-10-27"
    },
    {
      "id": "us",
      "url": "https://www.eia.gov/energyexplained/us-energy-facts/data-and-statistics.php",
      "sha256": "30b7c44f7a8f7ad4ec4883b9d0364fd7194195da85c8fdadf5f083ba731a10ea",
      "retrieved": "2026-10-27"
    },
    {
      "id": "demand",
      "url": "https://www.iea.org/reports/global-energy-review-2026/key-findings",
      "retrievalError": "HTTP Error 403: Forbidden",
      "verified": "official source via web tool"
    }
  ],
  "profiles": [
    {
      "country": "India",
      "code": "IND",
      "year": 2023,
      "sourceDate": "6 February 2025",
      "source": "https://www.eia.gov/international/content/analysis/countries_long/India/",
      "basis": "EIA primary energy consumption, rounded shares; source grouping retained",
      "rows": [
        [
          "Petroleum / liquids",
          29
        ],
        [
          "Natural gas",
          6
        ],
        [
          "Coal",
          59
        ],
        [
          "Nuclear",
          2
        ],
        [
          "Hydro (rounded)",
          0
        ],
        [
          "Other renewables",
          4
        ]
      ],
      "note": "Table shows hydro rounded0% in the primary account although electricity generation from hydro is substantial. Do not infer no HEP. Cross-country accounting coverage/methods differ."
    },
    {
      "country": "United States",
      "code": "USA",
      "year": 2024,
      "sourceDate": "24 April 2025 preliminary snapshot",
      "source": "https://www.eia.gov/energyexplained/us-energy-facts/data-and-statistics.php",
      "basis": "EIA total primary energy consumption, rounded shares",
      "rows": [
        [
          "Petroleum",
          38
        ],
        [
          "Natural gas",
          36
        ],
        [
          "Coal",
          8
        ],
        [
          "Nuclear",
          9
        ],
        [
          "Renewables",
          9
        ]
      ],
      "note": "Preliminary2024 snapshot. Different year/account conventions from India; not an exact matched-year comparison."
    }
  ],
  "growth": {
    "source": "https://www.iea.org/reports/global-energy-review-2026/key-findings",
    "release": "20 April 2026",
    "rates": [
      [
        2024,
        2.0
      ],
      [
        2025,
        1.3
      ]
    ],
    "unit": "percent annual global energy demand growth",
    "note": "Revised2024 rate in2026 edition; not older2025report2.2%. Solar PV met over25% of2025growth, not25% of total energy."
  },
  "population": {
    "source": "https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/undesa_pd_2022_the_world_at_8_billion.pdf",
    "rows": [
      [
        1927,
        2
      ],
      [
        1974,
        4
      ],
      [
        2022,
        8
      ]
    ],
    "unit": "billion people",
    "note": "Rounded historical milestone estimates, not annual observations or energy demand."
  }
};
