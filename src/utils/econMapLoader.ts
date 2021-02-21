import { MapObjectInterface } from '@/types';
import { defineAsyncComponent } from 'vue';
import econMapComponents from '@/lib/econMapList.json';

const econMap: MapObjectInterface = {
  components: econMapComponents,
  get keys(): Array<string> {
    return Object.keys(this.components);
  },
};

// eslint-disable-next-line
const econMapBuilder = (acc: Record<string, any>, key: string) => ({
  ...acc,
  [key]: defineAsyncComponent(() => import(`@/components/icons/${econMap.components[key]}`)),
});

const econMapLoader = econMap.keys.reduce(econMapBuilder, {});

export default econMapLoader;
