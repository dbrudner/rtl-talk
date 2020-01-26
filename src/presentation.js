// Import React
import React from 'react';

// Import Spectacle Core tags
import {
	BlockQuote,
	Cite,
	Deck,
	Heading,
	ListItem,
	List,
	Quote,
	Slide,
	Text,
	Code,
	CodePane
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
	{
		primary: 'white',
		secondary: '#1F2022',
		tertiary: '#03A9FC',
		quaternary: '#CECECE'
	},
	{
		primary: 'Montserrat',
		secondary: 'Helvetica'
	}
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={['zoom', 'slide']}
				transitionDuration={500}
				theme={theme}
			>
				<Slide transition={['zoom']} bgColor="primary">
					<Heading
						size={1}
						fit
						caps
						lineHeight={1}
						textColor="secondary"
					>
						React Testing Library
					</Heading>
					<Quote textColor="tertiary" style={{ marginTop: '60px' }}>
						"Simple and complete React DOM testing utilities that
						encourage good testing practices."
					</Quote>
				</Slide>
				<Slide
					transition={['fade']}
					bgColor="secondary"
					textColor="primary"
				>
					<BlockQuote>
						<Quote>
							"The more your tests resemble the way your software
							is used, the more confidence they can give you."
						</Quote>
						<Cite>Kent C. Dodds</Cite>
					</BlockQuote>
				</Slide>
				<Slide>
					<Heading>Why do we write tests?</Heading>
					<List>
						<ListItem>TDD</ListItem>
						<ListItem>Regression</ListItem>
						<ListItem>Confidence</ListItem>
						<ListItem>Documentation</ListItem>
						<ListItem>Fun?</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Bad testing practices</Heading>
					<List>
						<ListItem>Tests for the sake of having tests</ListItem>
						<ListItem>
							Tests that need to be updated/changed frequently
						</ListItem>
						<ListItem>Tests that focus on implementation</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Better testing practices</Heading>
					<List>
						<ListItem>
							Tests that act on web apps like users, not
							robots/parsers
						</ListItem>
						<ListItem>
							As little mocking as possible (though mocking is
							unavoidable)
						</ListItem>
						<ListItem>
							Tests shouldn't break after refactoring
						</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>"Bad" test example</Heading>
					<CodePane
						lang="javascript"
						source={require('./bad-test-2.example')}
					/>
				</Slide>
				<Slide>
					<Heading>Bad testing practice</Heading>
					<List>
						<ListItem>
							Directly calling and testing a class method is
							testing implementation
						</ListItem>
						<ListItem>
							Can create a false positive situation -- just
							because state is accurate, we don't know from our
							tests that the user is seeing this on the dom
						</ListItem>
						<ListItem>
							Would need to be updated if component was refactored
						</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Better testing practice</Heading>
				</Slide>
				<Slide>
					<CodePane
						lang="javascript"
						source={require('./login-component.example')}
					/>
				</Slide>
				<Slide>
					<CodePane
						lang="javascript"
						source={require('./login-test.example')}
					/>
				</Slide>
				<Slide>
					<Heading>Takeaways</Heading>
					<List>
						<ListItem>
							Testing UI/react components doesn't have to be
							difficult, intimidating, or time consuming
						</ListItem>
					</List>
					<List>
						<ListItem>
							Tests should be written with consideration for the
							user first
						</ListItem>
					</List>
				</Slide>
			</Deck>
		);
	}
}
