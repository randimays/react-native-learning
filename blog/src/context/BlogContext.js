import createDataContext from './createDataContext';

const ADD_BLOG = 'ADD_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';
const EDIT_BLOG = 'EDIT_BLOG';

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BLOG:
      const blogKey = Math.floor(Math.random() * 9999);

      return [
        ...state,
        {
          id: blogKey,
          title: action.payload.title,
          content: action.payload.content,
        }
      ];
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

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({ type: ADD_BLOG, payload: { title, content } });

    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: DELETE_BLOG, payload: id });
  };
}

const editBlogPost = dispatch => {
  return (id, title, content, callback) => {
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
  },
  []
);