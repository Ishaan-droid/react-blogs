import {
  STORE_DATA,
  OPEN_MODAL,
  CLOSE_MODAL,
  EDIT_MODAL,
  UPDATE_BLOG,
  DELETE_BLOG,
} from './actions';

const initialState = {
  formData: {
    username: '',
    password: '',
  },
  blogs: [],
  readBlogs: [],
  load: true,
  modal: false,
  modalBody: '',
  modalId: '',
  editModal: false,
  reload: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DATA:
      return {
        formData: {
          username: action.payload.userName,
          password: action.payload.password,
        },
      };
    case 'POST_BLOG':
      return {
        ...state,
        blogs: state.blogs.concat({
          id: action.payload.id,
          blog: action.payload.body,
        }),
      };
    case 'DISPLAY_BLOG':
      return {
        ...state,
        readBlogs: state.readBlogs.concat(action.payload.data),
        load: false,
      };
    case OPEN_MODAL:
      return {
        ...state,
        modal: true,
        modalId: action.payload.id,
        modalBody: action.payload.body,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modal: false,
      };
    case EDIT_MODAL:
      return {
        ...state,
        editModal: !state.editModal,
      };

    case UPDATE_BLOG:
      return {
        ...state,
        readBlogs: state.readBlogs.concat({ body: action.payload.body }),
        reload: window.location.reload(),
      };
    case DELETE_BLOG:
      return {
        ...state,
        reload: window.location.reload(),
      };
    default:
      return state;
  }
};

export default reducer;
