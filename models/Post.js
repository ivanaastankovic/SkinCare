class Post {
    constructor(id, categoryId, title, description, imageUrl, likeNumber) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
        this.likeNumber = likeNumber;
    }
}

export default Post;