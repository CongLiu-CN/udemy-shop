import { createContext, useState, useEffect } from 'react';


const canadaProvinces = [ 
  { name: 'Alberta', abbreviation: 'AB' }, 
  { name: 'British Columbia', abbreviation: 'BC' }, 
  { name: 'Manitoba', abbreviation: 'MB' }, 
  { name: 'New Brunswick', abbreviation: 'NB' }, 
  { name: 'Newfoundland and Labrador', abbreviation: 'NL' }, 
  { name: 'Northwest Territories', abbreviation: 'NT' }, 
  { name: 'Nova Scotia', abbreviation: 'NS' }, 
  { name: 'Nunavut', abbreviation: 'NU' }, 
  { name: 'Ontario', abbreviation: 'ON' }, 
  { name: 'Prince Edward Island', abbreviation: 'PE' }, 
  { name: 'Quebec', abbreviation: 'QC' }, 
  { name: 'Saskatchewan', abbreviation: 'SK' }, 
  { name: 'Yukon Territory', abbreviation: 'YT' } 
]

const ontarioColleges = [
  {
     "name":"Confederation",
     "address":"1450 Nakina Drive",
     "city":"Thunder",
     "postcode":"P7C4W1",
     "latitude":"48.402726",
     "longitude":"-89.267491",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/conf_logo_tile2x.png?w=81"
  },
  {
     "name":"Northern",
     "address":"4715 Highway 101 East",
     "city":"South",
     "postcode":"P0N1H0",
     "latitude":"48.480469",
     "longitude":"-81.210078",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/nort_logo_tile.png?w=81"
  },
  {
     "name":"Sault",
     "address":"443 Northern Avenue",
     "city":"Sault",
     "postcode":"P6B4J3",
     "latitude":"46.532899",
     "longitude":"-84.313133",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/saul_logo_tile.png?w=81"
  },
  {
     "name":"Boréal",
     "address":"21 Lasalle Boulevard",
     "city":"Sudbury",
     "postcode":"P3A6B1",
     "latitude":"46.514787",
     "longitude":"-80.993980",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/bore_logo_tile.png?w=81"
  },
  {
     "name":"Cambrian",
     "address":"1400 Barrydowne Road",
     "city":"Sudbury",
     "postcode":"P3A3V8",
     "latitude":"46.531266",
     "longitude":"-80.939900",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/camb_logo_tile.png?w=81"
  },
  {
     "name":"Canadore",
     "address":"100 College Drive",
     "city":"North",
     "postcode":"P1B8K9",
     "latitude":"46.296695",
     "longitude":"-79.455783",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/cana_logo_tile.png?w=81"
  },
  {
     "name":"Algonquin",
     "address":"1385 Woodroffe Avenue",
     "city":"Ottawa",
     "postcode":"K2G1V8",
     "latitude":"45.349077",
     "longitude":"-75.761072",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/algo_logo_tile.png?w=81"
  },
  {
     "name":"La Cité",
     "address":"801 Aviation Parkway",
     "city":"Ottawa",
     "postcode":"K1K4R3",
     "latitude":"45.439579",
     "longitude":"-75.627093",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/laci_logo_tile.png?w=81"
  },
  {
     "name":"St. Lawrence",
     "address":"100 Portsmouth Avenue",
     "city":"Kingston",
     "postcode":"K7L5A6",
     "latitude":"44.223513",
     "longitude":"-76.526756",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/slaw_logo_tile.png?w=81"
  },
  {
     "name":"Loyalist",
     "address":"376 Wallbridge-Loyalist Road",
     "city":"Belleville",
     "postcode":"K8N5B9",
     "latitude":"44.176977",
     "longitude":"-77.389889",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/loyt-logo-tile_20211014201855_0.png?w=81"
  },
  {
     "name":"Fleming",
     "address":"599 Brealey Drive",
     "city":"Peterborough",
     "postcode":"K9J7B1",
     "latitude":"44.269233",
     "longitude":"-78.374985",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/ssfl_logo_tile.png?w=81"
  },
  {
     "name":"Durham",
     "address":"2000 Simcoe Street North",
     "city":"Oshawa",
     "postcode":"L1H7K4",
     "latitude":"44.011418",
     "longitude":"-78.954493",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/durh_logo_tile.png?w=81"
  },
  {
     "name":"Georgian",
     "address":"One Georgian Drive",
     "city":"Barrie",
     "postcode":"L4M3X9",
     "latitude":"44.414473",
     "longitude":"-79.668836",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/geor_logo_tile.png?w=81"
  },
  {
     "name":"Centennial",
     "address":"941 Progress Avenue",
     "city":"Toronto",
     "postcode":"M1G3T8",
     "latitude":"43.784767",
     "longitude":"-79.229631",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/cent_logo_tile.png?w=81"
  },
  {
     "name":"Humber",
     "address":"205 Humber College Boulevard",
     "city":"Toronto",
     "postcode":"M9W5L7",
     "latitude":"43.729167",
     "longitude":"-79.606840",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/humb_logo_tile.png?w=81"
  },
  {
     "name":"George Brown",
     "address":"200 King Street East",
     "city":"Toronto",
     "postcode":"M5A3W8",
     "latitude":"43.651109",
     "longitude":"-79.370189",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/gbtc_logo_tile.png?w=81"
  },
  {
     "name":"Michener",
     "address":"222 St. Patrick Street",
     "city":"Toronto",
     "postcode":"M5T1V4",
     "latitude":"43.655471",
     "longitude":"-79.391099",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/mich_logo_tile.png?w=81"
  },
  {
     "name":"Seneca",
     "address":"1750 Finch Avenue East",
     "city":"Toronto",
     "postcode":"M2J2X5",
     "latitude":"43.795789",
     "longitude":"-79.348991",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/sene_logo_tile.png?w=81"
  },
  {
     "name":"Sheridan",
     "address":"1430 Trafalgar Road",
     "city":"Oakville",
     "postcode":"L6H2L1",
     "latitude":"43.468598",
     "longitude":"-79.700427",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/sher_logo_tile.png?w=81"
  },
  {
     "name":"Conestoga",
     "address":"299 Doon Valley Drive",
     "city":"Kitchener",
     "postcode":"N2G4M4",
     "latitude":"43.391818",
     "longitude":"-80.408959",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/cons_logo_tile.png?w=81"
  },
  {
     "name":"Mohawk",
     "address":"135 Fennell Avenue West",
     "city":"Hamilton",
     "postcode":"9C 0E5",
     "latitude":"",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/moha_logo_tile.png?w=81"
  },
  {
     "name":"Niagara",
     "address":"100 Niagara College Boulevard",
     "city":"Welland",
     "postcode":"L3C7L3",
     "latitude":"43.015091",
     "longitude":"-79.262685",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/niag_logo_tile.png?w=81"
  },
  {
     "name":"Niagara Parks",
     "address":"2565 Niagara Parkway",
     "city":"Niagara",
     "postcode":"L2E6T2",
     "latitude":"43.119060",
     "longitude":"-79.075314",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/npsh_logo_tile.png?w=81"
  },
  {
     "name":"Fanshawe",
     "address":"1001 Fanshawe College Boulevard, PO Box 7005",
     "city":"London",
     "postcode":"N5Y5R6",
     "latitude":"43.012185",
     "longitude":"-81.197073",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/fans_logo_tile.png?w=81"
  },
  {
     "name":"Ridgetown campus",
     "address":"120 Main Street",
     "city":"Ridgetown",
     "postcode":"N0P2C0",
     "latitude":"42.442448",
     "longitude":"-81.876433",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/ridg_logo_tile.png?w=81"
  },
  {
     "name":"St. Clair",
     "address":"2000 Talbot Road West",
     "city":"Windsor",
     "postcode":"N9A6S4",
     "latitude":"42.291979",
     "longitude":"-83.069952",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/stcl_logo_tile.png?w=81"
  },
  {
     "name":"Lambton",
     "address":"1457 London Road",
     "city":"Sarnia",
     "postcode":"N7S6K4",
     "latitude":"42.979201",
     "longitude":"-82.349561",
     "logo":"https://az184419.vo.msecnd.net/ontario-colleges/Website/images/colleges/college-logos/tiles-logos/lamb_logo_tile_81x81.png?w=81"
  }
]

export const ProvinceContext = createContext({
  province: {}
});

export const ProvinceProvider = ({ children }) => {
  const [province, setProvince] = useState({})

  const [colleges, setColleges] = useState([])

  useEffect(() => {
    setProvince(canadaProvinces[8])
    setColleges(ontarioColleges)
  }, []);

  const value = { province, colleges };

  return <ProvinceContext.Provider value={value}>{children}</ProvinceContext.Provider>;
};
