// sourced from: https://catalog.data.gov/dataset/mta-subway-stations
// all information pertaining to Staten Island Railway station location and other descriptives

var stations = [
    {
      "GTFSStopID": "S27",
      "StationID": 505,
      "ComplexID": 505,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Grasmere",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.603117,
      "GTFSLongitude": -74.084087,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.084087 40.603117)"
    },
    {
      "GTFSStopID": "S25",
      "StationID": 507,
      "ComplexID": 507,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Dongan Hills",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Embankment",
      "GTFSLatitude": 40.588849,
      "GTFSLongitude": -74.09609,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 1,
      "ADANorthbound": 1,
      "ADASouthbound": 1,
      "ADANotes": "",
      "Georeference": "POINT (-74.09609 40.588849)"
    },
    {
      "GTFSStopID": "S31",
      "StationID": 501,
      "ComplexID": 501,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "St George",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.643748,
      "GTFSLongitude": -74.073643,
      "NorthDirectionLabel": "Last Stop",
      "SouthDirectionLabel": "South Shore",
      "ADA": 1,
      "ADANorthbound": 1,
      "ADASouthbound": 1,
      "ADANotes": "",
      "Georeference": "POINT (-74.073643 40.643748)"
    },
    {
      "GTFSStopID": "S14",
      "StationID": 518,
      "ComplexID": 518,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Pleasant Plains",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Embankment",
      "GTFSLatitude": 40.52241,
      "GTFSLongitude": -74.217847,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.217847 40.52241)"
    },
    {
      "GTFSStopID": "S21",
      "StationID": 511,
      "ComplexID": 511,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Oakwood Heights",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.56511,
      "GTFSLongitude": -74.12632,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.12632 40.56511)"
    },
    {
      "GTFSStopID": "S26",
      "StationID": 506,
      "ComplexID": 506,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Old Town",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Embankment",
      "GTFSLatitude": 40.596612,
      "GTFSLongitude": -74.087368,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.087368 40.596612)"
    },
    {
      "GTFSStopID": "S22",
      "StationID": 510,
      "ComplexID": 510,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "New Dorp",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.57348,
      "GTFSLongitude": -74.11721,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 1,
      "ADANorthbound": 1,
      "ADASouthbound": 1,
      "ADANotes": "",
      "Georeference": "POINT (-74.11721 40.57348)"
    },
    {
      "GTFSStopID": "S13",
      "StationID": 519,
      "ComplexID": 519,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Richmond Valley",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.519631,
      "GTFSLongitude": -74.229141,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "Tottenville",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.229141 40.519631)"
    },
    {
      "GTFSStopID": "S18",
      "StationID": 514,
      "ComplexID": 514,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Eltingville",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Embankment",
      "GTFSLatitude": 40.544601,
      "GTFSLongitude": -74.16457,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.16457 40.544601)"
    },
    {
      "GTFSStopID": "S30",
      "StationID": 502,
      "ComplexID": 502,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Tompkinsville",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "At Grade",
      "GTFSLatitude": 40.636949,
      "GTFSLongitude": -74.074835,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.074835 40.636949)"
    },
    {
      "GTFSStopID": "S17",
      "StationID": 515,
      "ComplexID": 515,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Annadale",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.54046,
      "GTFSLongitude": -74.178217,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.178217 40.54046)"
    },
    {
      "GTFSStopID": "S29",
      "StationID": 503,
      "ComplexID": 503,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Stapleton",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Elevated",
      "GTFSLatitude": 40.627915,
      "GTFSLongitude": -74.075162,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.075162 40.627915)"
    },
    {
      "GTFSStopID": "S09",
      "StationID": 522,
      "ComplexID": 522,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Tottenville",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "At Grade",
      "GTFSLatitude": 40.512764,
      "GTFSLongitude": -74.251961,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "Last Stop",
      "ADA": 1,
      "ADANorthbound": 1,
      "ADASouthbound": 1,
      "ADANotes": "",
      "Georeference": "POINT (-74.251961 40.512764)"
    },
    {
      "GTFSStopID": "S23",
      "StationID": 509,
      "ComplexID": 509,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Grant City",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.578965,
      "GTFSLongitude": -74.109704,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.109704 40.578965)"
    },
    {
      "GTFSStopID": "S16",
      "StationID": 516,
      "ComplexID": 516,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Huguenot",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.533674,
      "GTFSLongitude": -74.191794,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.191794 40.533674)"
    },
    {
      "GTFSStopID": "S19",
      "StationID": 513,
      "ComplexID": 513,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Great Kills",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.551231,
      "GTFSLongitude": -74.151399,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 1,
      "ADANorthbound": 1,
      "ADASouthbound": 1,
      "ADANotes": "",
      "Georeference": "POINT (-74.151399 40.551231)"
    },
    {
      "GTFSStopID": "S24",
      "StationID": 508,
      "ComplexID": 508,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Jefferson Av",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Embankment",
      "GTFSLatitude": 40.583591,
      "GTFSLongitude": -74.103338,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.103338 40.583591)"
    },
    {
      "GTFSStopID": "S11",
      "StationID": 523,
      "ComplexID": 523,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Arthur Kill",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "At Grade",
      "GTFSLatitude": 40.516578,
      "GTFSLongitude": -74.242096,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "Tottenville",
      "ADA": 1,
      "ADANorthbound": 1,
      "ADASouthbound": 1,
      "ADANotes": "",
      "Georeference": "POINT (-74.242096 40.516578)"
    },
    {
      "GTFSStopID": "S28",
      "StationID": 504,
      "ComplexID": 504,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Clifton",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Elevated",
      "GTFSLatitude": 40.621319,
      "GTFSLongitude": -74.071402,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.071402 40.621319)"
    },
    {
      "GTFSStopID": "S20",
      "StationID": 512,
      "ComplexID": 512,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Bay Terrace",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Embankment",
      "GTFSLatitude": 40.5564,
      "GTFSLongitude": -74.136907,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.136907 40.5564)"
    },
    {
      "GTFSStopID": "S15",
      "StationID": 517,
      "ComplexID": 517,
      "Division": "SIR",
      "Line": "Staten Island",
      "StopName": "Prince's Bay",
      "Borough": "SI",
      "DaytimeRoutes": "SIR",
      "Structure": "Open Cut",
      "GTFSLatitude": 40.525507,
      "GTFSLongitude": -74.200064,
      "NorthDirectionLabel": "Ferry",
      "SouthDirectionLabel": "South Shore",
      "ADA": 0,
      "ADANorthbound": 0,
      "ADASouthbound": 0,
      "ADANotes": "",
      "Georeference": "POINT (-74.200064 40.525507)"
    }
   ]