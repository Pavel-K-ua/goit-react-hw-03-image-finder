import React from 'react';
import { Button, Form, Header, Input, Span } from './SearchBar.Styled';

export class SearchBar extends React.Component {
  state = {
    query: '',
  };
  handleChange = e => {
    this.setState({ query: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onChangeQuery(this.state.query);
    // this.setState({ query: '' });
  };
  render() {
    return (
      <Header class="searchbar">
        <Form onSubmit={this.handleSubmit} class="form">
          <Button type="submit" class="button">
            <Span class="button-label">Search</Span>
          </Button>

          <Input
            value={this.state.query}
            onChange={this.handleChange}
            class="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}
