declare module '@html-next/vertical-collection/components/vertical-collection/component' {
  import NativeArray from '@ember/array/-private/native-array';
  import Component from '@ember/component';

  import { htmlSafe } from '@ember/template';
  import { ExpandSignature } from '@glimmer/component/-private/component';

  // WARNING: This is not guaranteed to maintain argument position if more than one args name is passed!
  export type SignatureWithPositionedArg<
    S,
    K extends keyof ExpandSignature<S>['Args']['Named'],
  > = {
    Element: ExpandSignature<S>['Element'];
    Args: {
      Named: Omit<ExpandSignature<S>['Args']['Named'], K>;
      Positional: [ExpandSignature<S>['Args']['Named'][K]];
    };
    Blocks: ExpandSignature<S>['Blocks'];
  };

  export type SafeString = ReturnType<typeof htmlSafe>;

  export type GetOrElse<Obj, K, Fallback> = K extends keyof Obj
    ? Obj[K]
    : Fallback;

  export interface VerticalCollectionArgs<T> {
    items: NativeArray<T> | T[];
    estimateHeight: number;
    tagName?: string;
    key?: string;
    staticHeight?: boolean;
    shouldRecycle?: boolean;
    containerSelector?: string;
    bufferSize?: number;
    idForFirstItem?: string;
    renderFromLast?: boolean;
    renderAll?: boolean;
    lastReached?: () => void;
    firstReached?: () => void;
    lastVisibleChanged?: () => void;
    firstVisibleChanged?: () => void;
  }

  export interface VerticalCollectionSignature<T> {
    Element: HTMLElement;
    Args: {
      Named: VerticalCollectionArgs<T>;
    };
    Blocks: {
      default: [T, number];
      else: [];
    };
  }

  export default class VerticalCollection<T> extends Component<
    VerticalCollectionSignature<T>
  > {}
  export class VerticalCollectionCurly<T> extends Component<
    SignatureWithPositionedArg<VerticalCollectionSignature<T>, 'items'>
  > {}
}
