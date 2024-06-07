import React from 'react'
import {Link as RemixLink} from '@remix-run/react';

export default function Link({prefetch = 'viewport', ...rest}) {
  return <RemixLink unstable_viewTransition prefetch={prefetch} {...rest} />;
}
