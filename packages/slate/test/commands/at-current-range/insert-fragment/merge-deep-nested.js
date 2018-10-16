/** @jsx h */

import h from '../../../helpers/h'

export default function(change) {
  change.insertFragment(
    <document>
      <paragraph>
        <paragraph>
          <paragraph>2</paragraph>
          <paragraph>3</paragraph>
        </paragraph>
      </paragraph>
    </document>
  )
}

export const input = (
  <value>
    <document>
      <paragraph>
        <paragraph>
          <paragraph>
            1<cursor />
          </paragraph>
        </paragraph>
      </paragraph>
    </document>
  </value>
)

export const output = (
  <value>
    <document>
      <paragraph>
        <paragraph>
          <paragraph>12</paragraph>
          <paragraph>
            3<cursor />
          </paragraph>
        </paragraph>
      </paragraph>
    </document>
  </value>
)
