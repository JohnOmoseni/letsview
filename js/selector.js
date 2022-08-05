// MenuBar
export const sideNav = document.querySelector('[data-side-nav]')
export const menuBar = document.querySelector('.menu-icon')
export const closeSideNav = document.querySelector('[data-sideNav-close]')

// Comments and Likes 
export const likeBtns = document.querySelectorAll('.post .btns button:first-of-type')
export const likeIcons = document.querySelectorAll('.engagements .like-info .likes')
export const likeCount = document.querySelector('.engagements .like-count')
export const deleteCommentBtns = document.querySelectorAll('.post .comment-box .close-comment')

// Friends and Contacts
export const friends = document.querySelector('[data-friend-box]')
export const contacts = document.querySelector('[data-contact-box]')
export let footerBtns = document.querySelectorAll('.animate')
footerBtns = Array.from(footerBtns)

// Delete Posts
export const optionsBtn = document.querySelectorAll('[data-options]')
export const posts = document.querySelectorAll('.post')
export const deletePostBtns = document.querySelectorAll('.post #delete-post')

// Submit Comment
export const postForms = document.querySelectorAll('#index-page #post-comment')
export const commentDivs = document.querySelectorAll('.post .btns button:last-of-type');

// Close Buttons
const closeBtns = document.querySelectorAll('[data-close-btn]')
export const closeBtnsArray = Array.from(closeBtns);