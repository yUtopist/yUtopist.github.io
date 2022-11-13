/* globals Election */
class Controller {
	// eslint-disable-line no-unused-vars
	static setup() {
		// https://www.electionresults.govt.nz/electionresults_2020_preliminary/
		const theElection = new Election(2020);

		const parties = [
			'ACT New Zealand',
			'Advance NZ',
			'Aotearoa Legalise Cannabis Party',
			'Green Party',
			'HeartlandNZ',
			'Labour Party',
			'MÄori Party',
			'National Party',
			'New Conservative',
			'New Zealand First Party',
			'NZ Outdoors Party',
			'ONE Party',
			'Social Credit',
			'Sustainable New Zealand Party',
			'TEA Party',
			'The Opportunities Party (TOP)',
			'United Future',
		];
		parties.forEach((party) => theElection.addParty(party));

		const electorates = [
			'Auckland Central',
			'Banks Peninsula',
			'Bay of Plenty',
			'Botany',
			'Christchurch Central',
			'Christchurch East',
			'Coromandel',
			'Dunedin',
			'East Coast',
			'East Coast Bays',
			'Epsom',
			'Hamilton East',
			'Hamilton West',
			'Hutt South',
			'Ilam',
			'Invercargill',
			'KaikÅura',
			'Kaipara ki Mahurangi',
			'Kelston',
			'Mana',
			'MÄngere',
			'Manurewa',
			'Maungakiekie',
			'Mt Albert',
			'Mt Roskill',
			'Napier',
			'Nelson',
			'New Lynn',
			'New Plymouth',
			'North Shore',
			'Northcote',
			'Northland',
			'ÅŒhÄriu',
			'ÅŒtaki',
			'Pakuranga',
			'Palmerston',
			'Panmure-ÅŒtÄhuhu',
			'Papakura',
			'Port Waikato',
			'Rangitata',
			'RangitÄ«kei',
			'Remutaka',
			'Rongotai',
			'Rotorua',
			'Selwyn',
			'Southland',
			'Taieri',
			'Takanini',
			'TÄmaki',
			'Taranaki-King Country',
			'TaupÅ',
			'Tauranga',
			'Te AtatÅ«',
			'Tukituki',
			'Upper Harbour',
			'Waikato',
			'Waimakariri',
			'Wairarapa',
			'Waitaki',
			'Wellington Central',
			'West Coast-Tasman',
			'Whanganui',
			'WhangaparÄoa',
			'WhangÄrei',
			'Wigram',
			'Hauraki-Waikato',
			'Ikaroa-RÄwhiti',
			'TÄmaki Makaurau',
			'Te Tai HauÄuru',
			'Te Tai Tokerau',
			'Te Tai Tonga',
			'Waiariki',
		];
		electorates.forEach((electorate) => theElection.addElectorate(electorate));

		const winningParty = [
			['Auckland Central', 'Green Party'],
			['Banks Peninsula', 'Labour Party'],
			['Bay of Plenty', 'National Party'],
			['Botany', 'National Party'],
			['Christchurch Central', 'Labour Party'],
			['Christchurch East', 'Labour Party'],
			['Coromandel', 'National Party'],
			['Dunedin', 'Labour Party'],
			['East Coast', 'Labour Party'],
			['East Coast Bays', 'National Party'],
			['Epsom', 'ACT New Zealand'],
			['Hamilton East', 'Labour Party'],
			['Hamilton West', 'Labour Party'],
			['Hutt South', 'Labour Party'],
			['Ilam', 'Labour Party'],
			['Invercargill', 'National Party'],
			['KaikÅura', 'National Party'],
			['Kaipara ki Mahurangi', 'National Party'],
			['Kelston', 'Labour Party'],
			['Mana', 'Labour Party'],
			['MÄngere', 'Labour Party'],
			['Manurewa', 'Labour Party'],
			['Maungakiekie', 'National Party'],
			['Mt Albert', 'Labour Party'],
			['Mt Roskill', 'Labour Party'],
			['Napier', 'Labour Party'],
			['Nelson', 'Labour Party'],
			['New Lynn', 'Labour Party'],
			['New Plymouth', 'Labour Party'],
			['North Shore', 'National Party'],
			['Northcote', 'Labour Party'],
			['Northland', 'National Party'],
			['ÅŒhÄriu', 'Labour Party'],
			['ÅŒtaki', 'Labour Party'],
			['Pakuranga', 'National Party'],
			['Palmerston', 'Labour Party'],
			['Panmure-ÅŒtÄhuhu', 'Labour Party'],
			['Papakura', 'National Party'],
			['Port Waikato', 'National Party'],
			['Rangitata', 'Labour Party'],
			['RangitÄ«kei', 'National Party'],
			['Remutaka', 'Labour Party'],
			['Rongotai', 'Labour Party'],
			['Rotorua', 'National Party'],
			['Selwyn', 'National Party'],
			['Southland', 'National Party'],
			['Taieri', 'Labour Party'],
			['Takanini', 'Labour Party'],
			['TÄmaki', 'National Party'],
			['Taranaki-King Country', 'National Party'],
			['TaupÅ', 'National Party'],
			['Tauranga', 'National Party'],
			['Te AtatÅ«', 'Labour Party'],
			['Tukituki', 'Labour Party'],
			['Upper Harbour', 'Labour Party'],
			['Waikato', 'National Party'],
			['Waimakariri', 'National Party'],
			['Wairarapa', 'Labour Party'],
			['Waitaki', 'National Party'],
			['Wellington Central', 'Labour Party'],
			['West Coast-Tasman', 'Labour Party'],
			['Whanganui', 'Labour Party'],
			['WhangaparÄoa', 'National Party'],
			['WhangÄrei', 'National Party'],
			['Wigram', 'Labour Party'],
			['Hauraki-Waikato', 'Labour Party'],
			['Ikaroa-RÄwhiti', 'Labour Party'],
			['TÄmaki Makaurau', 'Labour Party'],
			['Te Tai HauÄuru', 'Labour Party'],
			['Te Tai Tokerau', 'Labour Party'],
			['Te Tai Tonga', 'Labour Party'],
			['Waiariki', 'MÄori Party'],
		];
		winningParty.forEach((entry) => theElection.setWinningParty(entry[0], entry[1]));

		const winningPercantage = [
			['ACT New Zealand', 8.0],
			['Advance NZ', 0.9],
			['Aotearoa Legalise Cannabis Party', 0.3],
			['Green Party', 7.6],
			['HeartlandNZ', 0.0],
			['Labour Party', 49.1],
			['MÄori Party', 1.0],
			['National Party', 26.8],
			['New Conservative', 1.5],
			['New Zealand First Party', 2.7],
			['NZ Outdoors Party', 0.1],
			['ONE Party', 0.3],
			['Social Credit', 0.1],
			['Sustainable New Zealand Party', 0.1],
			['TEA Party', 0.1],
			['The Opportunities Party (TOP)', 1.4],
			['United Future', 0.1],
		];
		winningPercantage.forEach((entry) => theElection.setVotePercent(entry[0], entry[1]));

		let theElectorate = theElection.findElectorate('Christchurch Central');

		const candidates = [
			['GASKIN, Ian Camden', 'United Future'],
			['HILL, Douglas MacMillan', 'The Opportunities Party (TOP)'],
			['RICHARDSON, Peter Ian', 'Green Party'],
			['ROBINSON, Philip John', 'New Zealand First Party'],
			['HERBERT-SHUFFLEBOTHAM, Janine Anne', 'Aotearoa Legalise Cannabis Party'],
			['WAGNER, Nicola Joanne', 'National Party'],
			['WEBB, Duncan Alexander', 'Labour Party'],
		];
		candidates.forEach((entry) => theElectorate.addCandidate(entry[0], entry[1]));

		const candidateVote = [
			['GASKIN, Ian Camden', 80],
			['HILL, Douglas MacMillan', 879],
			['RICHARDSON, Peter Ian', 1957],
			['ROBINSON, Philip John', 1091],
			['HERBERT-SHUFFLEBOTHAM, Janine Anne', 304],
			['WAGNER, Nicola Joanne', 13760],
			['WEBB, Duncan Alexander', 16631],
		];
		candidateVote.forEach((entry) => theElectorate.setCandidateVote(entry[0], entry[1]));

		return theElection;
	}
}
