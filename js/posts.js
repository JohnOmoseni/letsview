
const posts = [
    {
        profileImg: "../images/photo-1509631179647-0177331693ae.jpeg",
        username: "Julianna Taylor",
        lastSeen: "2 days ago",
        body: "Good Old Days",
        postImg: "img3",
        commentCount: "0 comment",
        likeCount: "12"
    },
    {
        profileImg: "../images/photo-1533056344954-8acef6d63650.jpeg",
        username: "Alec Benjamin",
        lastSeen: "10 hours ago",
        body: "I don't mean to meddle, but the devil doesn't bargain.",
        postImg: "img4",
        commentCount: "0 comment",
        likeCount: "5"
    },
    {
        profileImg: "../images/photo-1529139574466-a303027c1d8b.jpeg",
        username: "Annie Marie",
        lastSeen: "1 hour ago",
        body: "I don't mean to meddle, but the devil doesn't bargain.",
        postImg: "img5",
        commentCount: "0 comment",
        likeCount: "12"
    },
    {
        profileImg: "../images/photo-1515886657613-9f3515b0c78f.jpeg",
        username: "Lisa Laurence",
        lastSeen: "1 week ago",
        body: "I don't mean to meddle, but the devil doesn't bargain.",
        postImg: "img6",
        commentCount: "0 comment",
        likeCount: "14"
    },
    {
        profileImg: "../images/photo-1583396060233-3d13dbadf242.jpeg",
        username: "Iremide Diana",
        lastSeen: "5 hours ago",
        body: "I don't mean to meddle, but the devil doesn't bargain.",
        postImg: "img7",
        commentCount: "0 comment",
        likeCount: "105"
    }
]

posts.forEach(post => {
    const allPostsContainer = document.querySelector('#index-page .all-posts')

    const template = document.querySelector('[data-template]')
    const postDiv = template.content.cloneNode(true).firstElementChild;

    const profileImgDiv = postDiv.querySelector('.img-box img')
    const usernameDiv = postDiv.querySelector('.user-details h3') 
    const lastSeenDiv = postDiv.querySelector('.user-details .text')
    const postBodyDiv = postDiv.querySelector('.post-body')
    const postImgDiv = postDiv.querySelector('.post-image')
    const commentCountDiv = postDiv.querySelector('.engagements .comment-count')
    const likeCountDiv = postDiv.querySelector('.engagements .like-count')

    profileImgDiv.src = post.profileImg;
    usernameDiv.innerText = post.username;
    lastSeenDiv.innerText = post.lastSeen;
    postBodyDiv.innerText = post.body;
    postImgDiv.classList.add(post.postImg)
    commentCountDiv.innerText = post.commentCount
    likeCountDiv.innerText = post.likeCount

    // console.log(postDiv, allPostsContainer)
    allPostsContainer.append(postDiv)
})
