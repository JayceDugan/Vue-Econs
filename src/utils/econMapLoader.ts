import { MapObjectInterface } from '@/types';
import { defineAsyncComponent } from 'vue';

const map: MapObjectInterface = {
  list: {
    'ec-address': 'Address.vue',
  },
  get keys(): Array<string> {
    return Object.keys(this.list);
  },
};

// eslint-disable-next-line
const econMapLoader = map.keys.reduce((acc: Record<string, any>, key: string) => ({
  ...acc,
  [key]: defineAsyncComponent(() => import(`@/components/icons/${map.list[key]}`)),
}), {});

export default econMapLoader;
