//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header, Item, Input, Icon } from 'native-base';
import PropTypes from 'prop-types';
import { searchPhotos } from '../unsplash/actions';

// create a component
export class SearchBar extends Component {

    static propTypes = {
        searchPhotos: PropTypes.func.isRequired,
    }

    render() {
        return (
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" onChangeText={this.props.searchPhotos} />
                </Item>
            </Header>
        )
    }
}

export default connect(null, {
    searchPhotos,
})(SearchBar);