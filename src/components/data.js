export const projectData = [
	{
		id: 1,
		title: 'DeliverU - Node API',
		description:
			'An API I built for a small startup I contracted with in 2022. This API takes in mobile food delivery orders from our web interface and direct orders from Agilysis, the mobile order content management system contracted with RIT, and logs them into a database for access by the discord interface.',
		gitHubLink: 'https://github.com/aidan-lemay/DeliverU-NodeAPI',
	},
	{
		id: 2,
		title: 'DeliverU - Python Discord Bot',
		description:
			'A Python discord.py based Discord bot built as a companion to the Node API. This bot provides a multitude of functions. First, it retrieves open orders from the MongoDB database and posts them to the respective universities discord server. From there, drivers are able to "Clock In" and "Clock Out" for service, and will be notified of new orders and allowed to claim them. When a driver is the first person to claim an order, it is locked and the private details of the order; such as the name, address, and phone number, are sent to them via a private message. Customers are able to submit order modifications and feedback via the bot as well, and everything is securely hosted and logged.',
		gitHubLink: 'https://github.com/aidan-lemay/DeliverU-PythonBot',
	},
	{
		id: 3,
		title: 'Monroe County Emergency Services Discord Bot',
		description:
			'A Python interactions.py based Discord bot built for the RIT K2GXT discord server. The bot will scrape the Monroe County 911 Incidents RSS feed hosted by the county government and present it in a clean, easy to view way in the Discord server when requested. Recently, I integrated support for ClearCut, a club-member made application that transcribes live radio calls into a web interface where you can read the text of the call or listen to the audio. The bot allows club members to retrieve relevant call information and present it to them in the Discord interface. With the ClearCut support, I also added a function that allows you to search for content within the transcriptions, furthering the user experience.',
		gitHubLink: 'https://github.com/aidan-lemay/MC-Emergency-Bot',
	},
	{
		id: 4,
		title: '2 Player Battleship - RIT Class Project',
		description:
			'A synchronous, secure, two way, online version of Battleship I created for a class project. The project required us to create an attractive and functional user interface that allowed players to join the app, see other players who are online, chat with online players, and request to start a game with another player. Once in the game, the application needs to determine which players turn it is, allow that player to place their game pieces and submit a turn, and prohibit the other player from making a move until it is their turn. The application needed to be created in a way that is secure, handles errors gracefully, and prevents against XSS and SQL injection.',
		gitHubLink: 'https://github.com/aidan-lemay/Battleship_ISTE442',
	}
];
