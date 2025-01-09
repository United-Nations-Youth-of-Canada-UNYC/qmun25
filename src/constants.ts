import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import './CountryDropdown.css'; // Import the CSS file

export const STATE_OPTIONS = [
  { key: 'AL', value: 'AL', text: 'Alabama' },
  { key: 'AK', value: 'AK', text: 'Alaska' },
  { key: 'AZ', value: 'AZ', text: 'Arizona' },
  { key: 'AR', value: 'AR', text: 'Arkansas' },
  { key: 'CA', value: 'CA', text: 'California' },
  { key: 'CO', value: 'CO', text: 'Colorado' },
  { key: 'CT', value: 'CT', text: 'Connecticut' },
  { key: 'DE', value: 'DE', text: 'Delaware' },
  { key: 'DC', value: 'DC', text: 'District Of Columbia' },
  { key: 'FL', value: 'FL', text: 'Florida' },
  { key: 'GA', value: 'GA', text: 'Georgia' },
  { key: 'HI', value: 'HI', text: 'Hawaii' },
  { key: 'ID', value: 'ID', text: 'Idaho' },
  { key: 'IL', value: 'IL', text: 'Illinois' },
  { key: 'IN', value: 'IN', text: 'Indiana' },
  { key: 'IA', value: 'IA', text: 'Iowa' },
  { key: 'KS', value: 'KS', text: 'Kansas' },
  { key: 'KY', value: 'KY', text: 'Kentucky' },
  { key: 'LA', value: 'LA', text: 'Louisiana' },
  { key: 'ME', value: 'ME', text: 'Maine' },
  { key: 'MD', value: 'MD', text: 'Maryland' },
  { key: 'MA', value: 'MA', text: 'Massachusetts' },
  { key: 'MI', value: 'MI', text: 'Michigan' },
  { key: 'MN', value: 'MN', text: 'Minnesota' },
  { key: 'MS', value: 'MS', text: 'Mississippi' },
  { key: 'MO', value: 'MO', text: 'Missouri' },
  { key: 'MT', value: 'MT', text: 'Montana' },
  { key: 'NE', value: 'NE', text: 'Nebraska' },
  { key: 'NV', value: 'NV', text: 'Nevada' },
  { key: 'NH', value: 'NH', text: 'New Hampshire' },
  { key: 'NJ', value: 'NJ', text: 'New Jersey' },
  { key: 'NM', value: 'NM', text: 'New Mexico' },
  { key: 'NY', value: 'NY', text: 'New York' },
  { key: 'NC', value: 'NC', text: 'North Carolina' },
  { key: 'ND', value: 'ND', text: 'North Dakota' },
  { key: 'OH', value: 'OH', text: 'Ohio' },
  { key: 'OK', value: 'OK', text: 'Oklahoma' },
  { key: 'OR', value: 'OR', text: 'Oregon' },
  { key: 'PA', value: 'PA', text: 'Pennsylvania' },
  { key: 'RI', value: 'RI', text: 'Rhode Island' },
  { key: 'SC', value: 'SC', text: 'South Carolina' },
  { key: 'SD', value: 'SD', text: 'South Dakota' },
  { key: 'TN', value: 'TN', text: 'Tennessee' },
  { key: 'TX', value: 'TX', text: 'Texas' },
  { key: 'UT', value: 'UT', text: 'Utah' },
  { key: 'VT', value: 'VT', text: 'Vermont' },
  { key: 'VA', value: 'VA', text: 'Virginia' },
  { key: 'WA', value: 'WA', text: 'Washington' },
  { key: 'WV', value: 'WV', text: 'West Virginia' },
  { key: 'WI', value: 'WI', text: 'Wisconsin' },
  { key: 'WY', value: 'WY', text: 'Wyoming' },
];

export interface MemberOption {
  key: string;
  value: string;
  flag: string;
  text: string;
}

export const LANGUAGE_OPTIONS = [
  { key: 'Arabic', text: 'Arabic', value: 'Arabic' },
  { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
  { key: 'Danish', text: 'Danish', value: 'Danish' },
  { key: 'Dutch', text: 'Dutch', value: 'Dutch' },
  { key: 'English', text: 'English', value: 'English' },
  { key: 'French', text: 'French', value: 'French' },
  { key: 'German', text: 'German', value: 'German' },
  { key: 'Greek', text: 'Greek', value: 'Greek' },
  { key: 'Hungarian', text: 'Hungarian', value: 'Hungarian' },
  { key: 'Italian', text: 'Italian', value: 'Italian' },
  { key: 'Japanese', text: 'Japanese', value: 'Japanese' },
  { key: 'Korean', text: 'Korean', value: 'Korean' },
  { key: 'Lithuanian', text: 'Lithuanian', value: 'Lithuanian' },
  { key: 'Persian', text: 'Persian', value: 'Persian' },
  { key: 'Polish', text: 'Polish', value: 'Polish' },
  { key: 'Portuguese', text: 'Portuguese', value: 'Portuguese' },
  { key: 'Russian', text: 'Russian', value: 'Russian' },
  { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
  { key: 'Swedish', text: 'Swedish', value: 'Swedish' },
  { key: 'Turkish', text: 'Turkish', value: 'Turkish' },
  { key: 'Vietnamese', text: 'Vietnamese', value: 'Vietnamese' },
];

export const TAG_OPTIONS = [
  {
    key: 'Important',
    text: 'Important',
    value: 'Important',
    label: { color: 'red', empty: true, circular: true },
  },
  {
    key: 'Announcement',
    text: 'Announcement',
    value: 'Announcement',
    label: { color: 'blue', empty: true, circular: true },
  },
  {
    key: 'Cannot Fix',
    text: 'Cannot Fix',
    value: 'Cannot Fix',
    label: { color: 'black', empty: true, circular: true },
  },
  {
    key: 'News',
    text: 'News',
    value: 'News',
    label: { color: 'purple', empty: true, circular: true },
  },
  {
    key: 'Enhancement',
    text: 'Enhancement',
    value: 'Enhancement',
    label: { color: 'orange', empty: true, circular: true },
  },
  {
    key: 'Change Declined',
    text: 'Change Declined',
    value: 'Change Declined',
    label: { empty: true, circular: true },
  },
  {
    key: 'Off Topic',
    text: 'Off Topic',
    value: 'Off Topic',
    label: { color: 'yellow', empty: true, circular: true },
  },
  {
    key: 'Interesting',
    text: 'Interesting',
    value: 'Interesting',
    label: { color: 'pink', empty: true, circular: true },
  },
  {
    key: 'Discussion',
    text: 'Discussion',
    value: 'Discussion',
    label: { color: 'green', empty: true, circular: true },
  },
];

export type FlagNames = 
  'ad' | 'andorra' | 'ae' | 'united arab emirates' | 'uae' | 'af' | 'afghanistan' | 'ag' | 'antigua and barbuda' | 'ai' |
  'al' | 'albania' | 'am' | 'armenia' | 'an' | 'ao' | 'angola' | 'ar' |
  'argentina' | 'as' | 'at' | 'austria' | 'au' | 'australia' | 'aw' | 'ax' |
  'az' | 'azerbaijan' | 'ba' | 'bosnia and herzegovina' | 'bb' | 'barbados' | 'bd' | 'bangladesh' | 'be' |
  'belgium' | 'bf' | 'burkina faso' | 'bg' | 'bulgaria' | 'bh' | 'bahrain' | 'bi' | 'burundi' | 'bj' | 'benin' |
  'bm' | 'bn' | 'brunei' | 'bo' | 'bolivia' | 'br' | 'brazil' | 'bs' | 'bahamas' | 'bt' | 'bhutan' |
  'bv' | 'bw' | 'botswana' | 'by' | 'belarus' | 'bz' | 'belize' | 'ca' | 'canada' | 'cc' |
  'cd' | 'congo' | 'cf' | 'central african republic' | 'cg' | 'democratic republic of the congo' | 'ch' |
  'switzerland' | 'ci' | 'côte d’ivoire' | 'ck' | 'cl' | 'chile' | 'cm' | 'cameroon' | 'cn' |
  'china' | 'co' | 'colombia' | 'cr' | 'costa rica' | 'cs' | 'cu' | 'cuba' | 'cv' | 'cabo verde' | 'cx' |
  'cy' | 'cyprus' | 'cz' | 'czech republic' | 'de' | 'germany' | 'dj' | 'djibouti' | 'dk' |
  'denmark' | 'dm' | 'dominica' | 'do' | 'dominican republic' | 'dz' | 'algeria' | 'ec' | 'ecuador' | 'ee' |
  'estonia' | 'eg' | 'egypt' | 'eh' | 'er' | 'eritrea' | 'es' | 'spain' | 'et' | 'ethiopia' |
  'eu' | 'fi' | 'finland' | 'fj' | 'fiji' | 'fk' | 'fm' | 'micronesia' |
  'fo' | 'fr' | 'france' | 'ga' | 'gabon' | 'gb' | 'united kingdom' | 'gd' | 'grenada' | 'ge' |
  'georgia' | 'gf' | 'gh' | 'ghana' | 'gi' | 'gl' | 'gm' | 'the gambia' |
  'gn' | 'guinea' | 'gp' | 'gq' | 'equatorial guinea' | 'gr' | 'greece' | 'gs' |
  'gt' | 'guatemala' | 'gu' | 'gw' | 'guinea-bissau' | 'gy' | 'guyana' | 'hk' | 'hm' |
  'hn' | 'honduras' | 'hr' | 'croatia' | 'ht' | 'haiti' | 'hu' | 'hungary' | 'id' | 'indonesia' |
  'ie' | 'ireland' | 'il' | 'israel' | 'in' | 'india' | 'io' | 'iq' | 'iraq' | 'ir' |
  'iran' | 'is' | 'iceland' | 'it' | 'italy' | 'jm' | 'jamaica' | 'jo' | 'jordan' | 'jp' | 'japan' | 'ke' | 'kenya' |
  'kg' | 'kyrgyzstan' | 'kh' | 'cambodia' | 'ki' | 'kiribati' | 'km' | 'comoros' | 'kn' | 'saint kitts and nevis' |
  'kp' | 'democratic people’s republic of korea' | 'kr' | 'Republic of korea' | 'kw' | 'kuwait' | 'ky' | 'kz' | 'kazakhstan' |
  'la' | 'laos' | 'lb' | 'lebanon' | 'lc' | 'saint lucia' | 'li' | 'liechtenstein' | 'lk' | 'sri lanka' | 'lr' |
  'liberia' | 'ls' | 'lesotho' | 'lt' | 'lithuania' | 'lu' | 'luxembourg' | 'lv' | 'latvia' | 'ly' | 'libya' | 'ma' |
  'morocco' | 'mc' | 'monaco' | 'md' | 'moldova' | 'me' | 'montenegro' | 'mg' | 'madagascar' | 'mh' |
  'marshall islands' | 'mk' | 'macedonia' | 'ml' | 'mali' | 'mm' | 'myanmar' | 'burma' | 'mn' | 'mongolia' | 'mo' |
  'mp' | 'mq' | 'mr' | 'mauritania' | 'ms' |
  'mt' | 'malta' | 'mu' | 'mauritius' | 'mv' | 'maldives' | 'mw' | 'malawi' | 'mx' | 'mexico' | 'my' | 'malaysia' |
  'mz' | 'mozambique' | 'na' | 'namibia' | 'nc' | 'ne' | 'niger' | 'nf' | 'ng' |
  'nigeria' | 'ni' | 'nicaragua' | 'nl' | 'netherlands' | 'no' | 'norway' | 'np' | 'nepal' | 'nr' | 'nauru' |
  'nu' | 'nz' | 'new zealand' | 'om' | 'oman' | 'pa' | 'panama' | 'pe' | 'peru' | 'pf' |
  'pg' | 'papua new guinea' | 'ph' | 'philippines' | 'pk' | 'pakistan' | 'pl' | 'poland' | 'pm' | 'pn' |
  'pr' | 'ps' | 'palestine' | 'pt' | 'portugal' | 'pw' | 'palau' | 'py' |
  'paraguay' | 'qa' | 'qatar' | 're' | 'ro' | 'romania' | 'rs' | 'serbia' | 'ru' | 'russia' | 'rw' |
  'rwanda' | 'sa' | 'saudi arabia' | 'sb' | 'solomon islands' | 'sc' | 'seychelles' | 'gb sct' | 'scotland' | 'sd' |
  'sudan' | 'se' | 'sweden' | 'sg' | 'singapore' | 'sh' | 'si' | 'slovenia' | 'sj' |
  'jan mayen' | 'sk' | 'slovakia' | 'sl' | 'sierra leone' | 'sm' | 'san marino' | 'sn' | 'senegal' | 'so' |
  'somalia' | 'sr' | 'suriname' | 'st' | 'sao tome and principe' | 'sv' | 'el salvador' | 'sy' | 'syria' | 'sz' | 'eswatini' |
  'tc' | 'td' | 'chad' | 'tf' | 'tg' | 'togo' | 'th' | 'thailand' | 'tj' |
  'tajikistan' | 'tk' | 'tl' | 'timor-leste' | 'tm' | 'turkmenistan' | 'tn' | 'tunisia' | 'to' | 'tonga' |
  'tr' | 'turkey' | 'tt' | 'trinidad and tobago' | 'tv' | 'tuvalu' | 'tw' | 'tz' | 'tanzania' | 'ua' | 'ukraine' |
  'ug' | 'uganda' | 'um' | 'us' | 'america' | 'united states' | 'uy' | 'uruguay' | 'uz' |
  'uzbekistan' | 'va' | 'holy see' | 'vc' | 'saint vincent and the grenadines' | 've' | 'venezuela' | 'vg' |
  'vi' | 'vn' | 'vietnam' | 'vu' | 'vanuatu' | 'gb wls' | 'wales' |
  'wf' | 'ws' | 'samoa' | 'ye' | 'yemen' | 'yt' | 'za' | 'south africa' | 'ss' | 'south sudan' | 
  'zm' | 'zambia' | 'zw' | 'zimbabwe';

export const COUNTRY_OPTIONS = [
  {key: 'af', value: 'af', flag: 'af', text: 'Afghanistan'},
  {key: 'al', value: 'al', flag: 'al', text: 'Albania'},
  {key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria'},
  {key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra'},
  {key: 'ao', value: 'ao', flag: 'ao', text: 'Angola'},
  {key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua and Barbuda'},
  {key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina'},
  {key: 'am', value: 'am', flag: 'am', text: 'Armenia'},
  {key: 'au', value: 'au', flag: 'au', text: 'Australia'},
  {key: 'at', value: 'at', flag: 'at', text: 'Austria'},
  {key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan'},
  {key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas'},
  {key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain'},
  {key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh'},
  {key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados'},
  {key: 'by', value: 'by', flag: 'by', text: 'Belarus'},
  {key: 'be', value: 'be', flag: 'be', text: 'Belgium'},
  {key: 'bz', value: 'bz', flag: 'bz', text: 'Belize'},
  {key: 'bj', value: 'bj', flag: 'bj', text: 'Benin'},
  {key: 'bt', value: 'bt', flag: 'bt', text: 'Bhutan'},
  {key: 'bo', value: 'bo', flag: 'bo', text: 'Bolivia'},
  {key: 'ba', value: 'ba', flag: 'ba', text: 'Bosnia and Herzegovina'},
  {key: 'bw', value: 'bw', flag: 'bw', text: 'Botswana'},
  {key: 'br', value: 'br', flag: 'br', text: 'Brazil'},
  {key: 'bn', value: 'bn', flag: 'bn', text: 'Brunei'},
  {key: 'bg', value: 'bg', flag: 'bg', text: 'Bulgaria'},
  {key: 'bf', value: 'bf', flag: 'bf', text: 'Burkina Faso'},
  {key: 'bi', value: 'bi', flag: 'bi', text: 'Burundi'},
  {key: 'kh', value: 'kh', flag: 'kh', text: 'Cambodia'},
  {key: 'cm', value: 'cm', flag: 'cm', text: 'Cameroon'},
  {key: 'ca', value: 'ca', flag: 'ca', text: 'Canada'},
  {key: 'cv', value: 'cv', flag: 'cv', text: 'Cabo Verde'},
  {key: 'cf', value: 'cf', flag: 'cf', text: 'Central African Republic'},
  {key: 'td', value: 'td', flag: 'td', text: 'Chad'},
  {key: 'cl', value: 'cl', flag: 'cl', text: 'Chile'},
  {key: 'cn', value: 'cn', flag: 'cn', text: 'China'},
  {key: 'co', value: 'co', flag: 'co', text: 'Colombia'},
  {key: 'km', value: 'km', flag: 'km', text: 'Comoros'},
  {key: 'cg', value: 'cg', flag: 'cg', text: 'Republic of the Congo'},
  {key: 'cd', value: 'cd', flag: 'cd', text: 'Democratic Republic of the Congo'},
  {key: 'cr', value: 'cr', flag: 'cr', text: 'Costa Rica'},
  {key: 'ci', value: 'ci', flag: 'ci', text: 'Côte d’Ivoire'},
  {key: 'hr', value: 'hr', flag: 'hr', text: 'Croatia'},
  {key: 'cu', value: 'cu', flag: 'cu', text: 'Cuba'},
  {key: 'cy', value: 'cy', flag: 'cy', text: 'Cyprus'},
  {key: 'cz', value: 'cz', flag: 'cz', text: 'Czechia'}, // renamed 2016
  {key: 'dk', value: 'dk', flag: 'dk', text: 'Denmark'},
  {key: 'dj', value: 'dj', flag: 'dj', text: 'Djibouti'},
  {key: 'dm', value: 'dm', flag: 'dm', text: 'Dominica'},
  {key: 'do', value: 'do', flag: 'do', text: 'Dominican Republic'},
  {key: 'ec', value: 'ec', flag: 'custom-ec', text: 'Ecuador'}, // Ecuador custom flag
  {key: 'eg', value: 'eg', flag: 'eg', text: 'Egypt'},
  {key: 'sv', value: 'sv', flag: 'sv', text: 'El Salvador'},
  {key: 'gb', value: 'gb', flag: 'gb', text: 'United Kingdom'},
  {key: 'gq', value: 'gq', flag: 'gq', text: 'Equatorial Guinea'},
  {key: 'er', value: 'er', flag: 'er', text: 'Eritrea'},
  {key: 'ee', value: 'ee', flag: 'ee', text: 'Estonia'},
  {key: 'et', value: 'et', flag: 'et', text: 'Ethiopia'},
  {key: 'fj', value: 'fj', flag: 'fj', text: 'Fiji'},
  {key: 'fi', value: 'fi', flag: 'fi', text: 'Finland'},
  {key: 'fr', value: 'fr', flag: 'fr', text: 'France'},
  {key: 'ga', value: 'ga', flag: 'ga', text: 'Gabon'},
  {key: 'gm', value: 'gm', flag: 'gm', text: 'The Gambia'},
  {key: 'ge', value: 'ge', flag: 'ge', text: 'Georgia'},
  {key: 'de', value: 'de', flag: 'de', text: 'Germany'},
  {key: 'gh', value: 'gh', flag: 'gh', text: 'Ghana'},
  {key: 'gr', value: 'gr', flag: 'gr', text: 'Greece'},
  {key: 'gd', value: 'gd', flag: 'gd', text: 'Grenada'},
  {key: 'gt', value: 'gt', flag: 'gt', text: 'Guatemala'},
  {key: 'gw', value: 'gw', flag: 'gw', text: 'Guinea-Bissau'},
  {key: 'gn', value: 'gn', flag: 'gn', text: 'Guinea'},
  {key: 'gy', value: 'gy', flag: 'gy', text: 'Guyana'},
  {key: 'ht', value: 'ht', flag: 'ht', text: 'Haiti'},
  {key: 'hn', value: 'hn', flag: 'hn', text: 'Honduras'},
  {key: 'hu', value: 'hu', flag: 'hu', text: 'Hungary'},
  {key: 'is', value: 'is', flag: 'is', text: 'Iceland'},
  {key: 'in', value: 'in', flag: 'in', text: 'India'},
  {key: 'id', value: 'id', flag: 'id', text: 'Indonesia'},
  {key: 'ir', value: 'ir', flag: 'ir', text: 'Iran'},
  {key: 'iq', value: 'iq', flag: 'iq', text: 'Iraq'},
  {key: 'ie', value: 'ie', flag: 'ie', text: 'Ireland'},
  {key: 'il', value: 'il', flag: 'il', text: 'Israel'},
  {key: 'it', value: 'it', flag: 'it', text: 'Italy'},
  {key: 'jm', value: 'jm', flag: 'jm', text: 'Jamaica'},
  {key: 'jp', value: 'jp', flag: 'jp', text: 'Japan'},
  {key: 'jo', value: 'jo', flag: 'jo', text: 'Jordan'},
  {key: 'kz', value: 'kz', flag: 'kz', text: 'Kazakhstan'},
  {key: 'ke', value: 'ke', flag: 'ke', text: 'Kenya'},
  {key: 'ki', value: 'ki', flag: 'ki', text: 'Kiribati'},
  {key: 'kw', value: 'kw', flag: 'kw', text: 'Kuwait'},
  {key: 'kg', value: 'kg', flag: 'kg', text: 'Kyrgyzstan'},
  {key: 'la', value: 'la', flag: 'la', text: 'Laos'},
  {key: 'lv', value: 'lv', flag: 'lv', text: 'Latvia'},
  {key: 'lb', value: 'lb', flag: 'lb', text: 'Lebanon'},
  { key: 'ls', value: 'ls', flag: 'custom-ls', text: 'Lesotho' }, // Lesotho custom flag
  {key: 'lr', value: 'lr', flag: 'lr', text: 'Liberia'},
  {key: 'ly', value: 'ly', flag: 'custom-ly', text: 'Libya'}, // Libya custom flag
  {key: 'li', value: 'li', flag: 'li', text: 'Liechtenstein'},
  {key: 'lt', value: 'lt', flag: 'lt', text: 'Lithuania'},
  {key: 'lu', value: 'lu', flag: 'lu', text: 'Luxembourg'},
  {key: 'mk', value: 'mk', flag: 'mk', text: 'North Macedonia'}, // renamed in 2019
  {key: 'mg', value: 'mg', flag: 'mg', text: 'Madagascar'},
  {key: 'mw', value: 'mw', flag: 'mw', text: 'Malawi'},
  {key: 'my', value: 'my', flag: 'my', text: 'Malaysia'},
  {key: 'mv', value: 'mv', flag: 'mv', text: 'Maldives'},
  {key: 'ml', value: 'ml', flag: 'ml', text: 'Mali'},
  {key: 'mt', value: 'mt', flag: 'mt', text: 'Malta'},
  {key: 'mh', value: 'mh', flag: 'mh', text: 'Marshall Islands'},
  {key: 'mr', value: 'mr', flag: 'mr', text: 'Mauritania'},
  {key: 'mu', value: 'mu', flag: 'mu', text: 'Mauritius'},
  {key: 'mx', value: 'mx', flag: 'mx', text: 'Mexico'},
  {key: 'fm', value: 'fm', flag: 'fm', text: 'Micronesia'},
  {key: 'md', value: 'md', flag: 'md', text: 'Moldova'},
  {key: 'mc', value: 'mc', flag: 'mc', text: 'Monaco'},
  {key: 'mn', value: 'mn', flag: 'mn', text: 'Mongolia'},
  {key: 'me', value: 'me', flag: 'me', text: 'Montenegro'},
  {key: 'ma', value: 'ma', flag: 'ma', text: 'Morocco'},
  {key: 'mz', value: 'mz', flag: 'mz', text: 'Mozambique'},
  {key: 'mm', value: 'mm', flag: 'custom-mm', text: 'Myanmar'}, // Myanmar custom flag
  {key: 'na', value: 'na', flag: 'na', text: 'Namibia'},
  {key: 'nr', value: 'nr', flag: 'nr', text: 'Nauru'},
  {key: 'np', value: 'np', flag: 'np', text: 'Nepal'},
  {key: 'nl', value: 'nl', flag: 'nl', text: 'Netherlands'},
  {key: 'pg', value: 'pg', flag: 'pg', text: 'Papua New Guinea'},
  {key: 'nz', value: 'nz', flag: 'nz', text: 'New Zealand'},
  {key: 'ni', value: 'ni', flag: 'ni', text: 'Nicaragua'},
  {key: 'ne', value: 'ne', flag: 'ne', text: 'Niger'},
  {key: 'ng', value: 'ng', flag: 'ng', text: 'Nigeria'},
  {key: 'kp', value: 'kp', flag: 'kp', text: 'Democratic People’s Republic of Korea'},
  {key: 'no', value: 'no', flag: 'no', text: 'Norway'},
  {key: 'om', value: 'om', flag: 'om', text: 'Oman'},
  {key: 'pk', value: 'pk', flag: 'pk', text: 'Pakistan'},
  {key: 'pw', value: 'pw', flag: 'pw', text: 'Palau'},
  {key: 'ps', value: 'ps', flag: 'ps', text: 'Palestine'},
  {key: 'pa', value: 'pa', flag: 'pa', text: 'Panama'},
  {key: 'py', value: 'py', flag: 'py', text: 'Paraguay'},
  {key: 'pe', value: 'pe', flag: 'pe', text: 'Peru'},
  {key: 'ph', value: 'ph', flag: 'ph', text: 'Philippines'},
  {key: 'pl', value: 'pl', flag: 'pl', text: 'Poland'},
  {key: 'pt', value: 'pt', flag: 'pt', text: 'Portugal'},
  {key: 'qa', value: 'qa', flag: 'qa', text: 'Qatar'},
  {key: 'ro', value: 'ro', flag: 'ro', text: 'Romania'},
  {key: 'ru', value: 'ru', flag: 'ru', text: 'Russia'},
  {key: 'rw', value: 'rw', flag: 'rw', text: 'Rwanda'},
  {key: 'kn', value: 'kn', flag: 'kn', text: 'Saint Kitts and Nevis'},
  {key: 'lc', value: 'lc', flag: 'lc', text: 'Saint Lucia'},
  {key: 'vc', value: 'vc', flag: 'vc', text: 'Saint Vincent and the Grenadines'},
  {key: 'ws', value: 'ws', flag: 'ws', text: 'Samoa'},
  {key: 'sm', value: 'sm', flag: 'sm', text: 'San Marino'},
  {key: 'st', value: 'st', flag: 'st', text: 'São Tomé and Príncipe'},
  {key: 'sa', value: 'sa', flag: 'sa', text: 'Saudi Arabia'},
  {key: 'sn', value: 'sn', flag: 'sn', text: 'Senegal'},
  {key: 'rs', value: 'rs', flag: 'rs', text: 'Serbia'},
  {key: 'sc', value: 'sc', flag: 'sc', text: 'Seychelles'},
  {key: 'sl', value: 'sl', flag: 'sl', text: 'Sierra Leone'},
  {key: 'sg', value: 'sg', flag: 'sg', text: 'Singapore'},
  {key: 'sk', value: 'sk', flag: 'sk', text: 'Slovakia'},
  {key: 'si', value: 'si', flag: 'si', text: 'Slovenia'},
  {key: 'sb', value: 'sb', flag: 'sb', text: 'Solomon Islands'},
  {key: 'so', value: 'so', flag: 'so', text: 'Somalia'},
  {key: 'za', value: 'za', flag: 'za', text: 'South Africa'},
  {key: 'ss', value: 'ss', flag: 'custom-ss', text: 'South Sudan'}, // Adding South Sudan
  {key: 'kr', value: 'kr', flag: 'custom-kr', text: 'Republic of Korea'}, // South Korea custom flag
  {key: 'es', value: 'es', flag: 'es', text: 'Spain'},
  {key: 'lk', value: 'lk', flag: 'lk', text: 'Sri Lanka'},
  {key: 'sd', value: 'sd', flag: 'sd', text: 'Sudan'},
  {key: 'sr', value: 'sr', flag: 'sr', text: 'Suriname'},
  {key: 'sz', value: 'sz', flag: 'sz', text: 'Eswatini'}, // renamed in 2018 (was Swaziland)
  {key: 'se', value: 'se', flag: 'se', text: 'Sweden'},
  {key: 'ch', value: 'ch', flag: 'ch', text: 'Switzerland'},
  {key: 'sy', value: 'sy', flag: 'sy', text: 'Syria'},
  {key: 'tj', value: 'tj', flag: 'tj', text: 'Tajikistan'},
  {key: 'tz', value: 'tz', flag: 'tz', text: 'Tanzania'},
  {key: 'th', value: 'th', flag: 'th', text: 'Thailand'},
  {key: 'tl', value: 'tl', flag: 'tl', text: 'Timor-Leste'},
  {key: 'tg', value: 'tg', flag: 'tg', text: 'Togo'},
  {key: 'to', value: 'to', flag: 'to', text: 'Tonga'},
  {key: 'tt', value: 'tt', flag: 'tt', text: 'Trinidad and Tobago'},
  {key: 'tn', value: 'tn', flag: 'tn', text: 'Tunisia'},
  {key: 'tr', value: 'tr', flag: 'tr', text: 'Turkey'},
  {key: 'tm', value: 'tm', flag: 'tm', text: 'Turkmenistan'},
  {key: 'tv', value: 'tv', flag: 'custom-tv', text: 'Tuvalu'}, // Tuvalu custom flag
  {key: 'ug', value: 'ug', flag: 'ug', text: 'Uganda'},
  {key: 'ua', value: 'ua', flag: 'ua', text: 'Ukraine'},
  {key: 'ae', value: 'ae', flag: 'ae', text: 'United Arab Emirates'},
  {key: 'us', value: 'us', flag: 'us', text: 'United States'},
  {key: 'uy', value: 'uy', flag: 'uy', text: 'Uruguay'},
  {key: 'uz', value: 'uz', flag: 'uz', text: 'Uzbekistan'},
  {key: 'vu', value: 'vu', flag: 'vu', text: 'Vanuatu'},
  {key: 'va', value: 'va', flag: 'va', text: 'Holy See'},
  {key: 've', value: 've', flag: 've', text: 'Venezuela'},
  {key: 'vn', value: 'vn', flag: 'vn', text: 'Vietnam'},
  {key: 'ye', value: 'ye', flag: 'ye', text: 'Yemen'},
  {key: 'zm', value: 'zm', flag: 'zm', text: 'Zambia'},
  {key: 'zw', value: 'zw', flag: 'zw', text: 'Zimbabwe'},
];