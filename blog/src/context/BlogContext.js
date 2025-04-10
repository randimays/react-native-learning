import createDataContext from './createDataContext';

const ADD_BLOG = 'ADD_BLOG';
const DELETE_BLOG = 'DELETE_BLOG';
const UPDATE_BLOG = 'UPDATE_BLOG';

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BLOG:
      const blogKey = Math.floor(Math.random() * 9999);

      return [
        ...state,
        {
          id: blogKey,
          title: `Blog Post #${blogKey}`
        }
      ];
    case DELETE_BLOG:
      return [...state.filter(blog => blog.id !== action.payload)];
    case UPDATE_BLOG:
      const blogToUpdate = state.find(blog => blog.title === action.payload)?.[0];

      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return () => {
    dispatch({ type: ADD_BLOG });
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({ type: DELETE_BLOG, payload: id });
  };
}

export const { Context, Provider } = createDataContext(
  blogReducer, {
    addBlogPost,
    deleteBlogPost,
  },
  []
);