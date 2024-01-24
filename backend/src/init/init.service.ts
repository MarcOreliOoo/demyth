// mongodb-initialization.service.ts
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Mythology, MythologyDocument } from "../features/mythology/mythologies.schema";
import { God, GodDocument } from "../features/god/gods.schema";
import { log } from "../utils/debug.utils";
import { EGods, EMythologies } from "../enums";
import { Role, RoleDocument } from "../features/role/roles.schema";
import { greekUnitsList } from "./rolesList";

@Injectable()
export class InitDbService {
    private mythologiesId: Record<EMythologies, ObjectId> = {} as Record<EMythologies, ObjectId>;
    private godsId: Record<EGods, ObjectId> = {} as Record<EGods, ObjectId>;
    private rolesId: Record<string, string> = {} as Record<string, string>;

    constructor(
        @InjectModel(Mythology.name) private readonly mythologyModel: Model<Mythology>,
        @InjectModel(God.name) private readonly godModel: Model<God>,
        @InjectModel(Role.name) private readonly roleModel: Model<Role>,
    ) {}

    async initializeSchemas(): Promise<boolean> {
        log("InitDbService > initializeSchemas");
        return (
            (await this.initializeMythologiesSchema()) &&
            (await this.initializeGodsSchema()) &&
            (await this.initializeRolesSchema())
        );
    }

    async getMythListId(): Promise<void> {
        const mythList = await this.mythologyModel.find({}, "name _id");
        mythList.forEach((myth: MythologyDocument) => {
            this.mythologiesId[myth.name] = myth._id;
        });
    }

    async initializeMythologiesSchema(): Promise<boolean> {
        if (await this.mythologyModel.exists({})) {
            await this.getMythListId();
            if (Object.keys(this.mythologiesId).length > 0) return true;
        }
        log("InitDbService > initializeMythologiesSchema");
        const greek = new this.mythologyModel({
            name: EMythologies.Greek,
            shortDesc:
                "Explore ancient Greece, where gods meddle in mortal affairs, heroes embark on quests, and mythical creatures roam.",
            longDesc:
                "Step into the world of Greek mythology, a realm where powerful gods, cunning goddesses, and courageous heroes shape the destiny of mortals. From the heights of Mount Olympus to the depths of the Underworld, this ancient pantheon weaves tales of epic battles, tragic loves, and awe-inspiring feats. Encounter legendary creatures like the Minotaur, face the challenges of the Twelve Labors, and navigate the intrigues of the divine.",
            images: {
                main: "ipfs://a-main-image.png",
                miniature: "ipfs://a-miniature-image.png",
                icon: "ipfs://an-icon-image.png",
            },
            effects: {
                name: "Divine Favor",
                shortDesc:
                    "Invoke the favor of Greek gods for strength, wisdom, and supernatural aid in your epic quests and battles",
                icon: "ipfs://an-icon-image.png",
            },
        });
        const egyptian = new this.mythologyModel({
            name: EMythologies.Egyptian,
            shortDesc:
                "Unearth the mysteries of ancient Egypt, where pharaohs rule, gods command, and the afterlife holds great significance.",
            longDesc:
                "Journey through the sands of ancient Egypt, a land of pharaohs, pyramids, and potent deities. Here, the gods Osiris, Ra, and Isis hold dominion over the mortal realm and the world beyond. Explore the sacred rites of the Nile, confront the enigmatic Sphinx, and decipher hieroglyphic mysteries. Egyptian mythology weaves a tapestry of life, death, rebirth, and the enduring power of the gods.",
            images: {
                main: "ipfs://a-main-image.png",
                miniature: "ipfs://a-miniature-image.png",
                icon: "ipfs://an-icon-image.png",
            },
            effects: {
                name: "Ankh of Life",
                shortDesc:
                    "Channel the sacred Ankh's power to bring vitality, protection, and renewal to your journey through the lands of Egypt",
                icon: "ipfs://an-icon-image.png",
            },
        });
        const norse = new this.mythologyModel({
            name: EMythologies.Norse,
            shortDesc:
                "Embark on a Viking saga through the rugged lands of Norse gods, fierce warriors, and colossal beasts.",
            longDesc:
                "Set forth on a Viking odyssey through the realms of Norse mythology, where gods like Odin, Thor, and Loki command the elements and dictate the fates of both mortals and immortals. Traverse the Nine Worlds, from the icy realm of Niflheim to the fiery Muspelheim, encountering giants, elves, and otherworldly creatures. Norse mythology unfurls a saga of valor, destiny, and the eternal battle between chaos and order.",
            images: {
                main: "ipfs://a-main-image.png",
                miniature: "ipfs://a-miniature-image.png",
                icon: "ipfs://an-icon-image.png",
            },
            effects: {
                name: "Norse's Gaze",
                shortDesc:
                    "Unlock Norse's divine insight to unveil secrets, foresee challenges, and navigate the complex tapestry of the Norse realms",
                icon: "ipfs://an-icon-image.png",
            },
        });
        /*...*/
        if ((await this.mythologyModel.bulkSave([greek, egyptian, norse])).isOk()) {
            await this.getMythListId();
            return true;
        }
        return false;
    }

    async getGodListId(): Promise<void> {
        const godsList = await this.godModel.find({}, "name _id");
        godsList.forEach((god: GodDocument) => {
            this.godsId[god.name] = god._id;
        });
    }

    async initializeGodsSchema(): Promise<boolean> {
        if (await this.godModel.exists({})) {
            await this.getGodListId();
            if (Object.keys(this.godsId).length > 0) return true;
        }
        log("InitDbService > initializeGodsSchema");
        if (!(await this.mythologyModel.exists({}))) return false;

        const zeus = new this.godModel({
            name: EGods.Zeus,
            shortDesc: "King of the Gods, ruler of thunder and lightning.",
            longDesc:
                "Zeus, the mighty ruler of Mount Olympus, wields thunderbolts and governs the skies. His wisdom, strength, and authority shape the destinies of gods and mortals alike in the realm of Greek mythology.",
            images: {
                main: "ipfs://a-main-image.png",
                miniature: "ipfs://a-miniature-image.png",
                icon: "ipfs://an-icon-image.png",
            },
            powers: {
                name: "Thunderbolt Strike",
                shortDesc: "Unleash a devastating bolt of lightning, dealing immense damage to foes.",
                icon: "ipfs://an-icon-image.png",
            },
            mythology: this.mythologiesId.Greek,
        });
        const athena = new this.godModel({
            name: EGods.Athena,
            shortDesc: "Goddess of wisdom, strategy, and heroic endeavors.",
            longDesc:
                "Athena, the wise and strategic goddess, embodies intellect and courage. She empowers heroes with knowledge, guides battles, and stands as the patron of wisdom and heroic endeavors in the Greek pantheon.",
            images: {
                main: "ipfs://a-main-image.png",
                miniature: "ipfs://a-miniature-image.png",
                icon: "ipfs://an-icon-image.png",
            },
            powers: {
                name: "Shield of Wisdom",
                shortDesc: "Envelop allies in a protective aura, reducing incoming damage for a duration.",
                icon: "ipfs://an-icon-image.png",
            },
            mythology: this.mythologiesId.Greek,
        });
        const poseidon = new this.godModel({
            name: EGods.Poseidon,
            shortDesc: "God of the sea, earthquakes, and maritime power.",
            longDesc:
                "Poseidon, master of the seas and tamer of earthquakes, commands the vast ocean depths. His trident controls waves and tempests, offering both dominion over the waters and the force of nature in Greek mythology.",
            images: {
                main: "ipfs://a-main-image.png",
                miniature: "ipfs://a-miniature-image.png",
                icon: "ipfs://an-icon-image.png",
            },
            powers: {
                name: "Tidal Surge",
                shortDesc:
                    "Summon a powerful tidal wave, washing over enemies and causing them to be disoriented and slowed.",
                icon: "ipfs://an-icon-image.png",
            },
            mythology: this.mythologiesId.Greek,
        });
        if ((await this.godModel.bulkSave([zeus, athena, poseidon])).isOk()) {
            await this.getGodListId();
            return true;
        }
        return false;
    }

    async getRoleListId(): Promise<void> {
        const rolesList = await this.roleModel.find({}, "name _id");
        rolesList.forEach((role: RoleDocument) => {
            this.rolesId[role.name] = role._id.toString();
        });
    }

    async initializeRolesSchema(): Promise<boolean> {
        if (await this.roleModel.exists({})) {
            await this.getRoleListId();
            if (Object.keys(this.rolesId).length > 0) return true;
        }

        log("InitDbService > initializeRolesSchema");

        if (!(await this.mythologyModel.exists({})) || !(await this.godModel.exists({}))) return false;

        let fullUnitsList: RoleDocument[] = [];
        let unitListDtoUpdated: {};
        greekUnitsList.map((unit) => {
            unitListDtoUpdated = {
                ...unit,
                mythology: this.mythologiesId[unit.mythology],
                god: this.godsId[unit.god],
            };
            fullUnitsList.push(new this.roleModel(unitListDtoUpdated));
        });

        if ((await this.roleModel.bulkSave(fullUnitsList)).isOk()) {
            await this.getRoleListId();
            return true;
        }
        return false;
    }
}
