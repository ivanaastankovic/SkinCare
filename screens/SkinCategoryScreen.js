// kada iz Home screen-a odabere odredjenu kategoriju (telo, kosa, nokti, zubi) odlazi na sledecu stranicu i tu moze izabrati da procita nesto vise o odredjenom postu, nakon cega ide na PostScreen
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, POSTS } from '../data/dummy-data';
import PostListItem from '../components/PostListItem.js';

const SkinCategoryScreen = props => {
    const catID = props.navigation.getParam('categoryId');  // id koji dobijamo od HomeScreen-a
    const selectedCategory = CATEGORIES.find(cat => cat.id === catID);
    const selectedSkinPosts = POSTS.filter(post => post.categoryId.indexOf(catID) >= 0)

    const renderPostItem = (post) => {
        return <PostListItem
            title={post.item.title}
            description={post.item.description}
            image={post.item.imageUrl}
            onSelectPost={() => { }}
        />;
    }
    return (
        <FlatList
            data={selectedSkinPosts}
            renderItem={renderPostItem}
            style={{ width: '100%' }}
        />
    )
}

SkinCategoryScreen.navigationOptions = (navigationData) => { //koristim ovaj screen za prikazivanje razlicitog sadrzaja, zato mora da bude fj-a, a ne objekat kao u HomeScreen-u
    const categoryID = navigationData.navigation.getParam('categoryId');
    const chosenCategory = CATEGORIES.find(category => category.id === categoryID);
    return {
        headerTitle: chosenCategory.title,
        headerTitleStyle: {
            fontFamily: 'lora-regular',
        },
    }
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SkinCategoryScreen;