import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const GET_ALL_BLOGS = 'GET_ALL_BLOGS';
const DELETE_BLOG = 'DELETE_BLOG';
const EDIT_BLOG = 'EDIT_BLOG';

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_BLOGS:
      return action.payload;
    case DELETE_BLOG:
      return [...state.filter(blog => blog.id !== action.payload)];
    case EDIT_BLOG:
      return state.map(blog => {
        return blog.id === action.payload.id ? action.payload : blog;
      });
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    const response = await jsonServer.get('/blogposts');

    if (response?.data) {
      dispatch({ type: GET_ALL_BLOGS, payload: response.data });
    }
  };
}

const addBlogPost = () => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content })

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return async id => {
    await jsonServer.delete(`/blogposts/${id}`);

    dispatch({ type: DELETE_BLOG, payload: id });
  };
}

const editBlogPost = dispatch => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    dispatch({ type: EDIT_BLOG, payload: { id, title, content } });

    if (callback) {
      callback();
    }
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer, {
    addBlogPost,
    deleteBlogPost,
    editBlogPost,
    getBlogPosts,
  },
  []
);