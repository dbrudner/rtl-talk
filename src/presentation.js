// Import React
import React from "react";

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
	CodePane,
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
	{
		primary: "white",
		secondary: "#1F2022",
		tertiary: "#03A9FC",
		quaternary: "#CECECE",
	},
	{
		primary: "Montserrat",
		secondary: "Helvetica",
	},
);

export default class Presentation extends React.Component {
	render() {
		return (
			<Deck
				transition={["zoom", "slide"]}
				transitionDuration={500}
				theme={theme}
			>
				<Slide transition={["zoom"]} bgColor="primary">
					<Heading
						size={1}
						fit
						caps
						lineHeight={1}
						textColor="secondary"
					>
						React Testing Library
					</Heading>
					<Quote textColor="tertiary" style={{ marginTop: "60px" }}>
						"Simple and complete React DOM testing utilities that
						encourage good testing practices."
					</Quote>
					<Cite textColor="secondary">RTL docs</Cite>
				</Slide>
				<Slide
					transition={["fade"]}
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
					<Heading>
						Bad vs. good tests -- the philosophy behind RTL
					</Heading>
					<Heading>Bad</Heading>
					<List>
						<ListItem>Tests for the sake of having tests</ListItem>
						<ListItem>
							Tests that need to be updated/changed frequently
						</ListItem>
						<ListItem>Tests that focus on implementation</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Good</Heading>
					<List>
						<ListItem>Integration-ish tests</ListItem>
						<ListItem>
							Tests that look at web apps like users, not
							robots/parsers
						</ListItem>
						<ListItem>As little mocking as possible</ListItem>
						<ListItem>
							Shouldn't need to be updated after refactoring
							subject
						</ListItem>
					</List>
				</Slide>
				<Slide>
					<Heading>Bad test example 1</Heading>
					<CodePane
						lang="javascript"
						source={require("./bad-test-1.example")}
					></CodePane>
				</Slide>
				<Slide>
					<Text>Users don't parse pages using jquery selectors</Text>
					<Text>
						Also, a selector like this would need to be updated if
						another input with a type of text was added
					</Text>
				</Slide>
				<Slide>
					<Heading>Bad test example 2</Heading>
					<CodePane
						lang="javascript"
						source={require("./bad-test-2.example")}
					></CodePane>
				</Slide>
				<Slide>
					<Text>
						Directly calling and testing a class method is testing
						implementation
					</Text>
					<Text>
						Can create a false positive situation -- just because
						state is accurate, we don't know from our tests that the
						user is seeing this on the dom
					</Text>
					<Text>
						Would need to be updated if component was refactored
					</Text>
				</Slide>
			</Deck>
		);
	}
}
