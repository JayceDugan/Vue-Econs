import { Vue, Options } from 'vue-class-component';
import { econMapLoader } from '@/utils';

@Options({
  props: {
    icon: {
      type: String,
      default: 'default-icon',
    },
    height: {
      type: [Number, String],
      required: true,
      default: 30,
    },
    width: {
      type: [Number, String],
      required: true,
      default: 30,
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
    viewBox: {
      type: String,
      required: false,
      default: '0 0 18 18',
    },
  },
  components: econMapLoader,
})
export default class Econ extends Vue {}
