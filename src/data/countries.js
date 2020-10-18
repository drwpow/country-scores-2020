// prettier-ignore
const COUNTRIES = {
  ABW: { name: 'Aruba',                 flag: '🇦🇼', pop: 116576 },
  AFG: { name: 'Afghanistan',           flag: '🇦🇫', pop: 32225560 },
  AGO: { name: 'Angola',                flag: '🇦🇴', pop: 31127674 },
  ALB: { name: 'Albania',               flag: '🇦🇱', pop: 2845955 },
  AND: { name: 'Andorra',               flag: '🇦🇩', pop: 77543 },
  ARE: { name: 'United Arab Emirates',  flag: '🇦🇪', pop: 9890400 },
  ARG: { name: 'Argentina',             flag: '🇦🇷', pop: 44938712 },
  ARM: { name: 'Armenia',               flag: '🇦🇲', pop: 2956900 },
  ATG: { name: 'Antigua and Barbuda',   flag: '🇦🇬', pop: 96286 },
  AUS: { name: 'Australia',             flag: '🇦🇺', pop: 25682400 },
  AUT: { name: 'Austria',               flag: '🇦🇹', pop: 8902600 },
  AZE: { name: 'Azerbaijan',            flag: '🇦🇿', pop: 10127874 },
  BDI: { name: 'Burundi',               flag: '🇧🇮', pop: 11865821 },
  BEL: { name: 'Belgium',               flag: '🇧🇪', pop: 11492641 },
  BFA: { name: 'Burkina Faso',          flag: '🇧🇫', pop: 21510181 },
  BGD: { name: 'Bangladesh',            flag: '🇧🇩', pop: 161376708 },
  BGR: { name: 'Bulgaria',              flag: '🇧🇬', pop: 6951482 },
  BHR: { name: 'Bahrain',               flag: '🇧🇭', pop: 1569446 },
  BHS: { name: 'Bahamas',               flag: '🇧🇸', pop: 385637 },
  BLR: { name: 'Belarus',               flag: '🇧🇾', pop: 9408400 },
  BRA: { name: 'Brazil',                flag: '🇧🇷', pop: 210147125 },
  BRB: { name: 'Barbados',              flag: '🇧🇧', pop: 287025 },
  CAN: { name: 'Canada',                flag: '🇨🇦', pop: 38005238 },
  CHN: { name: 'China',                 flag: '🇨🇳', pop: 1400050000 },
  CIV: { name: 'Ivory Coast',           flag: '🇨🇮', pop: 26378274 },
  CMR: { name: 'Cameroon',              flag: '🇨🇲', pop: 26545864 },
  COL: { name: 'Colombia',              flag: '🇨🇴', pop: 50372424 },
  CYP: { name: 'Cyprus',                flag: '🇨🇾', pop: 1189265 },
  CZE: { name: 'Czechia',               flag: '🇨🇿', pop: 10693939 },
  DEU: { name: 'Germany',               flag: '🇩🇪', pop: 83166711 },
  DNK: { name: 'Denmark',               flag: '🇩🇰', pop: 5824857 },
  DZA: { name: 'Algeria',               flag: '🇩🇿', pop: 43900000 },
  EGY: { name: 'Egypt',                 flag: '🇪🇬', pop: 100075480 },
  ESP: { name: 'Spain',                 flag: '🇪🇸', pop: 47431256 },
  EST: { name: 'Estonia',               flag: '🇪🇪', pop: 1328976 },
  ETH: { name: 'Ethiopia',              flag: '🇪🇹', pop: 109224414 },
  FIN: { name: 'Finland',               flag: '🇫🇮', pop: 5528737 },
  FRA: { name: 'France',                flag: '🇫🇷', pop: 67081000 },
  GBR: { name: 'United Kingdom',        flag: '🇬🇧', pop: 67886004 },
  GHA: { name: 'Ghana',                 flag: '🇬🇭', pop: 31072940 },
  GRC: { name: 'Greece',                flag: '🇬🇷', pop: 10724599 },
  HRV: { name: 'Croatia',               flag: '🇭🇷', pop: 4058165 },
  HUN: { name: 'Hungary',               flag: '🇭🇺', pop: 9772756 },
  IDN: { name: 'Indonesia',             flag: '🇮🇩', pop: 267670543 },
  IND: { name: 'India',                 flag: '🇮🇳', pop: 1352642280 },
  IRL: { name: 'Ireland',               flag: '🇮🇪', pop: 4977400 },
  ISL: { name: 'Iceland',               flag: '🇮🇸', pop: 364134 },
  ISR: { name: 'Israel',                flag: '🇮🇱', pop: 9265200 },
  ITA: { name: 'Italy',                 flag: '🇮🇹', pop: 60317116 },
  JOR: { name: 'Jordan',                flag: '🇯🇴', pop: 10658123 },
  JPN: { name: 'Japan',                 flag: '🇯🇵', pop: 125960000 },
  KEN: { name: 'Kenya',                 flag: '🇰🇪', pop: 47564296 },
  KNA: { name: 'St. Kitts',             flag: '🇰🇳', pop: 52441 },
  KOR: { name: 'South Korea',           flag: '🇰🇷', pop: 51709098 },
  LBN: { name: 'Lebanon',               flag: '🇱🇧', pop: 6859408 },
  LCA: { name: 'St. Lucia',             flag: '🇱🇨', pop: 181889 },
  LTU: { name: 'Lithuania',             flag: '🇱🇹', pop: 2795334 },
  LUX: { name: 'Luxemborg',             flag: '🇱🇺', pop: 626108 },
  LVA: { name: 'Latvia',                flag: '🇱🇻', pop: 1907675 },
  MAR: { name: 'Morocco',               flag: '🇲🇦', pop: 37037908 },
  MEX: { name: 'Mexico',                flag: '🇲🇽', pop: 128649565 },
  MLT: { name: 'Malta',                 flag: '🇲🇹', pop: 514564 },
  MOZ: { name: 'Mozambique',            flag: '🇲🇿', pop: 30066648 },
  NGA: { name: 'Nigeria',               flag: '🇳🇬', pop: 206630269 },
  NLD: { name: 'Netherlands',           flag: '🇳🇱', pop: 17737438 },
  NOR: { name: 'Norway',                flag: '🇳🇴', pop: 5432580 },
  NZL: { name: 'New Zealand',           flag: '🇳🇿', pop: 5093310 },
  PAN: { name: 'Panama',                flag: '🇵🇦', pop: 4176869 },
  PER: { name: 'Peru',                  flag: '🇵🇪', pop: 32824358 },
  PHL: { name: 'Phillippines',          flag: '🇵🇭', pop: 109048269 },
  PNG: { name: 'Papua New Guinea',      flag: '🇵🇬', pop: 8935000 },
  POL: { name: 'Poland',                flag: '🇵🇱', pop: 38383000 },
  PRT: { name: 'Portugal',              flag: '🇵🇹', pop: 10295909 },
  PRY: { name: 'Paraguay',              flag: '🇵🇾', pop: 7292672 },
  QAT: { name: 'Qatar',                 flag: '🇶🇦', pop: 2795484 },
  ROU: { name: 'Romania',               flag: '🇷🇴', pop: 19317984 },
  RUS: { name: 'Russia',                flag: '🇷🇺', pop: 146748590 },
  RWA: { name: 'Rwanda',                flag: '🇷🇼', pop: 12374397 },
  SAU: { name: 'Saudi Arabia',          flag: '🇸🇦', pop: 34218169 },
  SDN: { name: 'Sudan',                 flag: '🇸🇩', pop: 41592539 },
  SEN: { name: 'Senegal',               flag: '🇸🇳', pop: 15854323 },
  SGP: { name: 'Singapore',             flag: '🇸🇬', pop: 5703600 },
  SLB: { name: 'Solomon Islands',       flag: '🇸🇧', pop: 652857 },
  SLE: { name: 'Sierra Leone',          flag: '🇸🇱', pop: 7092113 },
  SOM: { name: 'Somalia',               flag: '🇸🇴', pop: 15893219 },
  SRB: { name: 'Serbia',                flag: '🇷🇸', pop: 6963764 },
  STP: { name: 'Sao Tome and Principe', flag: '🇸🇹', pop: 211028 },
  SVK: { name: 'Slovakia',              flag: '🇸🇰', pop: 5457926 },
  SVN: { name: 'Slovenia',              flag: '🇸🇮', pop: 2095861 },
  SWE: { name: 'Sweden',                flag: '🇸🇪', pop: 10367423 },
  SYC: { name: 'Seychelles',            flag: '🇸🇨', pop: 97096 },
  TUN: { name: 'Tunisia',               flag: '🇹🇳', pop: 11722038 },
  TUR: { name: 'Turkey',                flag: '🇹🇷', pop: 83154997 },
  TZA: { name: 'Tanzania',              flag: '🇹🇿', pop: 56313438 },
  UGA: { name: 'Uganda',                flag: '🇺🇬', pop: 42729036 },
  UKR: { name: 'Ukraine',               flag: '🇺🇦', pop: 41743935 },
  USA: { name: 'United States',         flag: '🇺🇸', pop: 328239523 },
  VCT: { name: 'St. Vincent',           flag: '🇻🇨', pop: 110211 },
  VEN: { name: 'Venezuela',             flag: '🇻🇪', pop: 28887118 },
  WSM: { name: 'Samoa',                 flag: '🇼🇸', pop: 195843 },
  ZAF: { name: 'South Africa',          flag: '🇿🇦', pop: 59622350 },
  ZMB: { name: 'Zambia',                flag: '🇿🇲', pop: 17351708 },
  ZWE: { name: 'Zimbabwe',              flag: '🇿🇼', pop: 14215809 },
};

export default COUNTRIES;
