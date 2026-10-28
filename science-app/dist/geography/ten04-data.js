export const ten04Data={
  "checked": "2026-10-28",
  "sources": [
    {
      "key": "park",
      "url": "https://lakedistrict.gov.uk/protect/our-purpose-and-vision/",
      "file": "ten04-park-source.txt",
      "sha256": "1127ad8336e950ebc786a9aed6bbbd7bef4a13ae5678f361b92eb6b40fbd6cc7",
      "checked": "2026-10-28"
    },
    {
      "key": "paths",
      "url": "https://lakedistrict.gov.uk/explore/plan-your-visit/rights-of-way-access/fix-the-fells/",
      "file": "ten04-paths-source.txt",
      "sha256": "49adf5d3ed2a5be78fbf8dd491e416a7347671a207643a83b83e292e9fbd1c01",
      "checked": "2026-10-28"
    },
    {
      "key": "flood",
      "url": "https://www.forestresearch.gov.uk/research/slowing-the-flow-at-pickering/",
      "file": "ten04-flood-source.txt",
      "sha256": "25acd44830586f284e5044a5b25bc321be45bc67e92a665f60873ddcda8826d4",
      "checked": "2026-10-28"
    },
    {
      "key": "coast",
      "url": "https://www.gov.uk/government/publications/medmerry-coastal-flood-defence-scheme/medmerry-coastal-flood-defence-scheme",
      "file": "ten04-coast-source.txt",
      "sha256": "f2828d8cbffca90e2d28f5c4ddcbbfefc0a992f952e16321a16e339db44c62a4",
      "checked": "2026-10-28"
    },
    {
      "key": "climate",
      "url": "https://www.gov.uk/government/publications/uk-biennial-transparency-report-to-the-un-framework-convention-on-climate-change-2024/uks-first-biennial-transparency-report-submitted-to-the-un-framework-convention-on-climate-change-under-the-paris-agreement",
      "file": "ten04-climate-source.txt",
      "sha256": "738b23f01e422ad66478979040d8c2edad288471288fba686e108cf4e3a33f3a",
      "checked": "2026-10-28"
    },
    {
      "key": "national",
      "url": "https://www.gov.uk/government/publications/third-national-adaptation-programme-nap3/understanding-climate-adaptation-and-the-third-national-adaptation-programme-nap3",
      "file": "ten04-national-source.txt",
      "sha256": "230d956dde566df3f606af9b14b7782ff205d99e660c42309e1aad7e2d2ddf30",
      "checked": "2026-10-28"
    },
    {
      "key": "local",
      "url": "https://www.london.gov.uk/programmes-strategies/environment-and-climate-change/climate-change/climate-adaptation/cool-spaces",
      "file": "ten04-local-source.txt",
      "sha256": "b18e4eef1700e87fba71f879ba8c0ebcfb8140def40ba79fffb7692b15f61d43",
      "checked": "2026-10-28"
    }
  ],
  "climate": {
    "period": "2080\u20132100",
    "baseline": "1981\u20132000",
    "scenario": "medium emissions",
    "annualWarmingC": [
      1.1,
      2.3,
      3.6
    ],
    "range": "10th\u201390th percentiles",
    "source": "https://www.gov.uk/government/publications/uk-biennial-transparency-report-to-the-un-framework-convention-on-climate-change-2024/uks-first-biennial-transparency-report-submitted-to-the-un-framework-convention-on-climate-change-under-the-paris-agreement"
  },
  "flood": {
    "event": "December 2015",
    "estimatedPeakReductionPercent": [
      15,
      20
    ],
    "source": "https://www.forestresearch.gov.uk/research/slowing-the-flow-at-pickering/"
  },
  "worked": {
    "label": "Invented teaching observations; not collected in the field",
    "sites": [
      [
        "A",
        0,
        12,
        100,
        100
      ],
      [
        "B",
        100,
        9,
        200,
        100
      ],
      [
        "C",
        200,
        6,
        300,
        100
      ],
      [
        "D",
        300,
        7,
        400,
        100
      ]
    ],
    "columns": [
      "Site",
      "Distance from road / m",
      "Noise score / 0\u201320",
      "Easting / m (local grid)",
      "Northing / m (local grid)"
    ],
    "repeats": [
      6,
      7,
      17
    ],
    "independentCounts": [
      8,
      12,
      10,
      14
    ],
    "independentSites": [
      [
        "P",
        0,
        14
      ],
      [
        "Q",
        100,
        11
      ],
      [
        "R",
        200,
        7
      ],
      [
        "S",
        300,
        9
      ]
    ]
  }
};
