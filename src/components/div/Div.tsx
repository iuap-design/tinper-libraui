
import {manifest,ReactWrapper} from './manifest'
import React from 'react';
/**
 * todo
 * onAfterChange
 * marks
 * dots
 * included
 * maximumTrackStyle
 * minimumTrackStyle
 * handleStyle
 * trackStyle
 * railStyle
 */

function DivControl(props:any){
  return <div className="am-div-container">{props.children||''}</div>
}
export default ReactWrapper(DivControl, manifest)

