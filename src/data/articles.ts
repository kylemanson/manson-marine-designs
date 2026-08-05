export interface Article {
  slug: string;
  title: string;
  date: string;
  displayDate: string;
  excerpt: string;
  /** Markdown-lite: "## " for headings, "- " for bullets, blank line between paragraphs. */
  content: string;
}

export const articles: Article[] = [
  {
    slug: "sabani-okinawa-traditional-outrigger-fishing-boat",
    title: "The Sabani: Okinawa's Traditional Outrigger Fishing Boat",
    date: "2026-05-01",
    displayDate: "May 2026",
    excerpt:
      "A look at the sabani, the traditional fishing and sailing boat of the Ryukyu Islands — its hull form, nail-free joinery, sailing technique, and how it differs from the Pacific proa.",
    content: `If you've spent time along the shores of Okinawa's Yaeyama Islands (Taketomi, Ishigaki, or the main island itself), you've likely spotted a slender wooden boat riding at anchor just offshore, single mast standing bare against the sky, a small outrigger arm braced out to one side. This is the sabani (サバニ, also written 鱶舟), the traditional fishing and sailing boat of the Ryukyu Islands, and one of the last living wooden boatbuilding traditions in Japan.

## What Is a Sabani?

The sabani is a small wooden craft indigenous to Okinawa and the wider Ryukyu (Nansei) archipelago, historically built and sailed by local fishermen known as Uminchu (海人, "people of the sea"). Traditional sabani run roughly 6 to 9 meters long and just over a meter in beam: long, narrow, and shallow in draft, a hull shape built for one purpose, getting a fisherman out through coral reef shallows and into open water quickly, and back again with the catch.

Boatbuilder and researcher Douglas Brooks, who apprenticed under an Okinawan master builder in 2009 and 2010, notes that locals in Okinawa don't classify the sabani as a wasen (the general term for traditional Japanese boats) at all, a small but telling distinction rooted in the Ryukyu Kingdom's distinct history as an independent maritime kingdom before its 1879 annexation into Japan.

## Unique Features

A hull built for speed and reef navigation. The narrow, elongated hull form gives the sabani good speed for a paddled or lightly canvassed boat, along with resistance to lateral rolling, useful in the chop kicked up over reef flats. The tradeoff, well documented by builders and sailors alike, is stability: the sabani is notoriously easy to capsize, and traditional Uminchu were skilled at righting a swamped boat at sea, sometimes deliberately capsizing and riding out storms sheltered under the hull.

A high, upswept stern. Okinawan builders have long held that the sabani's distinctively raised stern shape helps the boat handle large ocean swells rolling in off the open Pacific, a practical adaptation to the sea conditions found beyond the reef edge.

Outrigger arms. The small lateral outrigger booms visible on many sabani today, the "wing" you'll often see reaching off one or both sides near the stern, are primarily a feature of racing and touring sabani rather than the historical fishing boat, added for extra stability under sail. On working sabani, propulsion was traditionally by paddle or a large steering oar rather than a fixed rudder; sail was added later and used to augment paddle power rather than replace it entirely.

No metal fasteners. Perhaps the single most striking construction feature: a traditional sabani is built with no metal nails or fastenings anywhere in the hull. In a humid, salt laden environment where iron fastenings corrode quickly, Okinawan builders instead developed wooden and bamboo jointing methods that have proven durable for generations.

## How a Sabani Is Sailed

Sailing a sabani is, by every account from the people who've actually done it, a hands full, feet braced experience. A few things define the technique:

Sail and paddle together. A sabani was never purely a sailboat; traditional working sabani were propelled by a combination of sail and paddle (locally called wakes), with paddling used to work through calms, maneuver in tight reef channels, and add power when the sail alone wasn't enough.

A steering paddle, not a fixed rudder. Rather than a mounted rudder, the sabani is steered with a large steering oar or paddle held loosely by the helmsman, with no oarlock, notch, or fixed binding recorded in traditional builder's references. The helmsman typically holds this steering paddle in one hand and the mainsheet in the other, and, critically, never cleats or ties off the sheet. Given how easily the boat can capsize, keeping the sheet free in hand lets the helmsman dump wind out of the sail instantly if a gust hits.

An adjustable mast step. Traditional sabani use a mast step that allows the mast's position to be shifted fore or aft (rather than a single fixed socket), which moves the sail's center of effort forward or aft to suit the wind strength and direction, stepping the mast further aft in stronger wind, for example, to balance the boat's helm.

Conventional tacking, not shunting. Despite superficial resemblance to Pacific outrigger canoes, a sabani sails and turns much like a conventional Western sailboat: it has a fixed bow and stern, and it tacks, turning the bow through the wind, rather than reversing end for end. A sabani under sail can also make real windward progress; sailors who've experienced it describe the boat sailing close hauled without paddling at all, quiet but for a distinctive hum from water moving along the hull.

Demands skill and constant attention. Every serious account of sabani sailing, from Okinawan builders to visiting Western boatbuilders, describes it as difficult and unforgiving. The narrow hull has little reserve stability, and traditional Uminchu fishermen were as practiced at righting a capsized sabani, or riding out a storm sheltered beneath the overturned hull, as they were at sailing it upright.

## Construction: From Dugout to Plank Built Hull

The sabani's construction history traces a path common to wooden boatbuilding traditions worldwide: from solid dugout canoe to a more material efficient plank built form.

The dugout origin. Early sabani, known as marukibune or marukinni, were true dugout canoes hollowed from a single large tree trunk. As old growth timber suitable for dugouts became scarce, the Ryukyu Kingdom restricted large scale logging for shipbuilding, and builders were pushed toward alternative methods.

The transition to hagi bune. According to Takara Kurayoshi, professor emeritus at the University of the Ryukyus, this forest preservation pressure from the Ryukyu Kingdom directly drove the shift toward hagi bune, boats built by joining separate wooden planks rather than carving a single log. Following Japan's Meiji era administrative reforms, an Itoman boatbuilder named Kame Uehara is credited with developing an early plank built prototype from cedar flooring boards, later refined by a former dugout canoe craftsman into a design known as "Haginni." This lineage became the ancestor of what's recognized today as the classic sabani form, sometimes called Itoman Hagi.

Semi dugout hybrid construction. The sabani built today, and through most of the 20th century, is technically a semi dugout (in Japanese, mudamahagi), a hybrid method rather than a pure plank on frame or pure dugout build. Builders join and shape large timbers into a solid lower hull section, then add thick cedar side planks fastened up from it, meeting the bottom at a hard chine (corner) rather than curving smoothly. This differs from true plank on frame Western construction and from the pure dugout: it retains some of the dugout's structural logic while using far less old growth timber.

Joinery without nails. Instead of metal fasteners, planks are joined edge to edge using wooden dovetail keys, called huundu, along with bamboo pegs, sometimes described as hardwood "butterfly" fastenings locking the seams together. Where the vessel's cross beams meet the hull, the beam ends are tenoned through the planking and wedged from outside, or locked in with a half dovetail joint. There are traditionally no blueprints or written plans for a sabani; the hull's proportions and lines are carried in the builder's experience and passed down through apprenticeship.

A vanishing craft, and a revival. By the postwar decades, small gasoline engines began appearing in sabani hulls, and boats grew larger to accommodate them. By the 1960s and 70s, most working fishermen had shifted to hard chine wooden and then fiberglass boats built along more conventional lines, and the number of active sabani craftsmen dropped sharply, at points down to a small handful across all of Okinawa. Since the 1990s and 2000s, however, the sabani has seen a genuine revival, driven less by fishing need than by cultural preservation and a growing sabani sailing race scene. Builders such as Tomohiro Yoshida on Ishigaki now train young apprentices in the traditional cedar and bamboo construction method specifically to keep the skill alive, producing boats for races and tourism rather than the fish market.

## Sabani vs. the Pacific Proa: Similarities and Differences

Given the outrigger arm visible on many sabani today, it's a natural question whether the boat is related to the Pacific proa, the classic outrigger sailing canoe of Micronesia and Polynesia (and the design behind vessels like the Chamorro sakman, famous historically as "flying proas"). The two share a family resemblance, but they're built on genuinely different design principles.

Where they're alike:

- Both trace back to a shared Austronesian and Pacific maritime lineage of dugout derived outrigger canoes, built for speed with minimal material.
- Both are traditionally steered with a paddle or steering oar rather than a fixed rudder.
- Both prioritize a long, narrow hull for low drag and speed over outright stability, and both are demanding, capsize prone boats that reward, and require, real skill to sail well.
- Both traditionally combine sail power with paddle propulsion rather than relying on sail alone.

Where they differ, and it's fundamental, not cosmetic:

- Hull symmetry and ends. A true Pacific proa is laterally asymmetric, one flattish side, one hull always kept to windward, but longitudinally symmetric, or "double ended": either end can serve as bow or stern. A sabani is the reverse: its hull is essentially symmetric side to side, but it has a fixed, distinct bow and stern like a conventional boat.
- Tacking vs. shunting. This is the core functional difference. A proa never tacks in the conventional sense; it "shunts," coming to a stop with the wind on the beam, reversing the sail and steering oar end for end, and moving off in the opposite direction with what was the bow now trailing as the stern. This is what lets the proa's outrigger stay on the windward side on every point of sail. A sabani, by contrast, tacks the ordinary way: it turns its bow through the wind, keeps the same end forward throughout, and its mast and sail don't need to reverse position.
- The outrigger's role. For a proa, the windward outrigger arrangement isn't a stability add on; it is the design: the whole boat is engineered around keeping that outrigger to weather to counter the sail's heeling force, and the outrigger is often built light enough to fly clear of the water when powered up. On a sabani, the outrigger arm seen on many modern boats is a comparatively recent addition, used mainly on racing and touring boats for extra stability; traditional working sabani generally sailed with no outrigger at all, relying on hull shape and crew skill instead. I wasn't able to confirm from available sources whether racing sabani outriggers are worked to windward the way a proa's ama is, or simply rigged to one fixed side; if that distinction matters for your purposes, it's worth verifying directly with a sabani sailing operator.
- Rig behavior. Traditional Pacific proas commonly carry a lateen or crab claw style sail on a rig designed to be flipped end to end at each shunt. The sabani's sail and mast are not designed to reverse this way; sail trim and helm balance are instead adjusted through the sheet and the sliding mast step described above.

In short: both boats are lean, fast, skill demanding descendants of the same broad Pacific outrigger canoe tradition, but the proa is built around an asymmetric hull and a shunting rig, while the sabani is a conventionally hulled, tacking sailboat that happens to sometimes carry a stabilizing outrigger arm.

## How Sabani Are Used Today

The commercial fishing role the sabani once filled has almost entirely passed to fiberglass and engine powered boats. What remains is:

- Sailing races (Hari / ハーリー), held at ports across Okinawa throughout the year, where sabani, often the outrigger equipped racing variant, compete under sail and paddle.
- Tourism and sailing experiences, including operators on Taketomi Island and elsewhere in the Yaeyama chain who take visitors out on traditional sabani, often narrating the boat's history and construction as part of the trip, very likely the kind of boat you'll spot moored just offshore on a visit to Taketomi.
- Private and recreational ownership, by a small but growing number of individuals and cultural groups working to keep the tradition visibly alive.

## Conclusion

The sabani is a rare thing: a wooden watercraft tradition whose construction techniques (dugout to plank evolution, corrosion proof wooden joinery, hull lines shaped for reef and swell conditions) evolved in direct response to the specific materials, waters, and maritime culture of the Ryukyu Kingdom, distinct from mainland Japanese wasen traditions. With only a handful of traditional builders left, the sabani sits in the same category as many endangered wooden boatbuilding crafts worldwide: kept alive today largely through cultural revival, racing culture, and tourism rather than its original working purpose.

## Sources

Wikipedia (Sabani boat, Proa, Drua); Douglas Brooks Boatbuilding (douglasbrooksboatbuilding.com); "Japanese Wooden Boatbuilding: History and Traditions," Education About Asia; THE GATE (thegate12.com); Okinawanderer; Merchant & Makers; Indigenous Boats (indigenousboats.blogspot.com); Proa File (proafile.com); M.B. Marsh Marine Design.`,
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
