<template>
  <div class="text-center text-h5 q-mb-md">Why Remove Dams?</div>
  <div>
    <div class="text-bold">Safety and Security</div>
    <br />
    <div>
      Safety and security concerns of old and obsolete dams now and in the
      future:<br />
      <ul>
        <li>
          Dams are not waterfalls. They have a lifetime expectation and need
          periodic maintenance and repairs to avoid dam collapses.
        </li>
        <li>
          Older dams are generally not designed for water discharge outside an
          accepted flow exchange. They are also likely to have reached high
          sedimentation rates which could threaten structural integrity. And as
          a result of ongoing and future climate change disturbances and
          predicted severe floods, serious threats to humans and infrastructures
          are now recognised. Therefore, older dams need special attention to
          avoid such safety and security risks.
        </li>
        <li>
          The public many times ignore the great danger involved in some small
          dams and weirs. In United States, some small weirs are commonly known
          as “drowning machines” because the hydraulic notch created right below
          the weirs suck swimmers, fishermen and kayakers when trying to cross
          the weir.
        </li>
        <li>
          Material From:
          <a href="https://www.damremoval.eu/" target="_blank"
            >https://www.damremoval.eu/</a
          >
        </li>
      </ul>
    </div>
    <div>
      <div class="text-bold">Regulatory Issues</div>
      <br />
      <div>
        In New Jersey, dams are regulated by the New Jersey Department of
        Environmental Protection, Division of Dam Safety & Flood Control, Bureau
        of Dam Safety. In 1912, the state legislature passed laws relating to
        the construction, repair, and inspection of existing and proposed dam
        structures. The law was amended in 1981 and became known as the Safe Dam
        Act, and in May 1985, the Dam Safety Standards were established.
        <br /><br />
        Structures regulated by Bureau of Dam Safety include all “artificial
        barriers, together with appurtenant works that raise the waters of a
        stream more than five feet above the usual mean low water height.”
        Regulations governing dams in New Jersey are found in N.J.A.C. 7:20 Dam
        Safety Standards (Statutory authority: N.J.S.A. 58:4-1 et seq. and
        N.J.S.A. 13:1D-1 et seq.).
        <br /><br />
        The primary goal of the program is to ensure the safety and integrity of
        dams in New Jersey and, thereby, protect people and property from the
        consequences of dam failures. Prior to removing a dam, an application
        must be submitted to the Bureau and the Bureau must issue a Dam Safety
        permit. Information to be included in this application is outlined in
        the Dam Safety Standards.
        <br /><br />
        According to the Dam Safety Standards, N.J.A.C. 7:20-2.9 (a), the Bureau
        of Dam Safety itself may remove a dam under certain circumstances:
        <br /><br />
        <q-card
          flat
          bordered
          style="font-family: Courier, Verdana, Tahoma, Verdana"
        >
          <q-card-section v-html="editor" />
        </q-card>
        <br />
        For forms and guidelines, rules and regulations, contact information and
        other information visit the New Jersey Department of Environmental
        Protection, Division of Dam Safety & Flood Control,
        <a href="https://www.nj.gov/dep/damsafety/rules.htm" target="_blank"
          >Bureau of Dam Safety website.</a
        ><br /><br />
      </div>
    </div>
    <div>
      <div class="text-bold">Economics</div>
      <br />
      <div>
        Often, the removal of man-made structures seems expensive and
        impractical. However, several analyses and case studies have shown
        otherwise.
        <ul>
          <li>
            Dam removal is generally cheaper than either repairing and
            maintaining old dams indefinitely or constructing formal fish
            passage structures, which solves only part of the barrier impact.
          </li>
          <li>
            In some rivers, the loss of income caused by the loss of fishing can
            be greater than the value of the power produced by hydropower dams.
          </li>
          <li>
            After removing some dams, recreational opportunities can improve
            downstream as the river recovers to its natural state, improves in
            water quality, and restores historic fish populations.
          </li>
          <li>
            Material From:
            <a href="https://www.damremoval.eu/" target="_blank"
              >https://www.damremoval.eu/</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="text-bold">Environmental</div>
      <br />
      <div>
        Dams impact every aspect of healthy rivers including the fishes we like
        to eat and fish. If we want to keep certain fish species…, like eel,
        sturgeon, and salmon, we must restore connectivity from sea to source.
        Not only do fish rely on natural river systems but also many other
        species living in the water and on land depend on and would benefit from
        free-flowing rivers.
        <ul>
          <li>
            Dams lead to loss of river habitat as the river is transferred into
            impoundments (impoundments or reservoirs are not lakes).
          </li>
          <li>
            Dams cause severe changes to the hydro and sediment dynamics in the
            river. This impact can reach hundreds of kilometers downstream
            affecting deltas and favoring different, often invasive species.
          </li>
          <li>
            Dams seriously impede the migration of fishes which directly results
            in a decline and even local extinction of many species.
          </li>
          <li>
            Material From:
            <a href="https://www.damremoval.eu/" target="_blank"
              >https://www.damremoval.eu/</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const editor = ref(
  'Whenever the Commissioner determines that a dam is in imminent danger of failure and has reasonable cause to believe that danger to life or property may be anticipated from the reservoir, dam or appurtenant structures located therein, and the owner of the dam or person having control of the reservoir or dam has failed to comply with an order to repair the dam or to take such interim measures as the Department determines are appropriate, including reducing the amount of water impounded by the dam or breaching the dam, the Department may, in addition to other actions authorized by the Safe Dam Act, this chapter and other law, enter upon any and all properties wherein the reservoir, dam or appurtenant structures are located, and using resources and personnel available to the Department, remove or cause to be removed the dam and/or appurtenant structures located therein, allowing the water to flow freely.',
);
</script>
