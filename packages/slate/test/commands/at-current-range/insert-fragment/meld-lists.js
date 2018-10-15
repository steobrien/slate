/** @jsx h */

import h from '../../../helpers/h'

export default function(change) {
  change.insertFragment(
    <document>
      <list>
        <item>added</item>
      </list>
    </document>
  )
}

export const input = (
  <value>
    <document>
      <list>
        <item>
          initial<cursor />
        </item>
      </list>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <list>
        <item>
          initialadded<cursor />
        </item>
      </list>
    </document>
  </value>
)
