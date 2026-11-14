type IriString = `${'http' | 'https'}://${string}`;
type Property = IriString; // eslint-disable-line
type Class = IriString; // eslint-disable-line
type Datatype = IriString; // eslint-disable-line
type OwlClass = IriString; // eslint-disable-line
type OwlObjectProperty = IriString; // eslint-disable-line
type OwlDatatypeProperty = IriString; // eslint-disable-line
type HydraResource = IriString; // eslint-disable-line
type HydraClass = IriString; // eslint-disable-line
type HydraLink = IriString; // eslint-disable-line
type HydraTemplatedLink = IriString; // eslint-disable-line
type HydraVariableRepresentation = IriString; // eslint-disable-line
type OtherIndividual = IriString; // eslint-disable-line

/**
 * Server Hardware
 * 
 * A Server Hardware is any type of hardware that can be found inside a frame. It includes firewalls, switches, F5 machines, etc.
 *
 * http://w3id.org/devops-infra/hardware#ServerHardware
 */
export const ServerHardware: OwlClass = 'http://w3id.org/devops-infra/hardware#ServerHardware';

/**
 * Hardware Batch
 * 
 * A Hardware Batch is a batch under which some hardware infrastructure was bought, kept for administrative purposes or to detect potential problems in the same batch
 *
 * http://w3id.org/devops-infra/hardware#HardwareBatch
 */
export const HardwareBatch: OwlClass = 'http://w3id.org/devops-infra/hardware#HardwareBatch';

/**
 * Frame
 * 
 * A frame, also known as rack, is a supporting framework that holds hardware modules. In this context, racks typically contain servers, hard disk drives and other computing equipment. Racks make it possible to contain a lot of equipment in a small physical footprint without requiring shelving.
 *
 * http://w3id.org/devops-infra/hardware#Frame
 */
export const Frame: OwlClass = 'http://w3id.org/devops-infra/hardware#Frame';

/**
 * Hardware Item
 * 
 * A piece of hardware that can be found in the context of a DevOps infrastructure
 *
 * http://w3id.org/devops-infra/hardware#HardwareItem
 */
export const HardwareItem: OwlClass = 'http://w3id.org/devops-infra/hardware#HardwareItem';

/**
 * Network Card
 * 
 * A network interface controller (NIC, also known as a network interface card, network adapter, LAN adapter or physical network interface, and by similar terms) is a computer hardware component that connects a computer to a computer network, usually a LAN. It is considered a piece of computer hardware. Most modern computers support an internal network interface controller embedded in the motherboard directly rather than provided as an external component.
 *
 * http://w3id.org/devops-infra/hardware#NetworkCard
 */
export const NetworkCard: OwlClass = 'http://w3id.org/devops-infra/hardware#NetworkCard';

/**
 * Switch
 * 
 * A network switch (also called switching hub, bridging hub, and, by the IEEE, MAC bridge) is networking hardware that connects devices on a computer network by using packet switching to receive and forward data to the destination device
 *
 * http://w3id.org/devops-infra/hardware#Switch
 */
export const Switch: OwlClass = 'http://w3id.org/devops-infra/hardware#Switch';

/**
 * Disk
 * 
 * A disk, understood as a piece of hardware. It can be of different types, and have size.
 *
 * http://w3id.org/devops-infra/hardware#Disk
 */
export const Disk: OwlClass = 'http://w3id.org/devops-infra/hardware#Disk';

/**
 * F5 Hardware
 * 
 * A specific type of hardware from the company F5.
 *
 * http://w3id.org/devops-infra/hardware#F5Hardware
 */
export const F5Hardware: OwlClass = 'http://w3id.org/devops-infra/hardware#F5Hardware';

/**
 * Firewall
 * 
 * A specific type of hardware (network security device, which may be virtualised in some cases) that monitors incoming and outgoing network traffic and permits or blocks data packets based on a set of security rules. Its purpose is to establish a barrier between the internal network and incoming traffic from external sources (such as the internet) in order to block malicious traffic like viruses and hackers.
 *
 * http://w3id.org/devops-infra/hardware#Firewall
 */
export const Firewall: OwlClass = 'http://w3id.org/devops-infra/hardware#Firewall';

/**
 * batch
 * 
 * Batch in which a hardware item was acquired
 *
 * http://w3id.org/devops-infra/hardware#batch
 */
export const batch: OwlObjectProperty = 'http://w3id.org/devops-infra/hardware#batch';

/**
 * high availability status
 * 
 * It determines the status of high availability of any servder hardware item. Normally it will be Standby or Active
 *
 * http://w3id.org/devops-infra/hardware#highAvailabilityStatus
 */
export const highAvailabilityStatus: OwlObjectProperty = 'http://w3id.org/devops-infra/hardware#highAvailabilityStatus';

/**
 * hosted in frame
 * 
 * Frame where a Server Hardware Item is physically located
 *
 * http://w3id.org/devops-infra/hardware#hostedInFrame
 */
export const hostedInFrame: OwlObjectProperty = 'http://w3id.org/devops-infra/hardware#hostedInFrame';

/**
 * network card
 * 
 * The network card to which a Hardware Item (e.g., Switch, Physical Server, etc.) is connected
 *
 * http://w3id.org/devops-infra/hardware#networkCard
 */
export const networkCard: OwlObjectProperty = 'http://w3id.org/devops-infra/hardware#networkCard';

/**
 * switch
 * 
 * A switch to which a network card is attached
 * Note that `switch` is a reserved Javascript keyword, and is therefore suffixed by `__workaround`.
 * For a list of reserved keywords, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords.
 *
 * http://w3id.org/devops-infra/hardware#switch
 */
export const switch__workaround: OwlObjectProperty = 'http://w3id.org/devops-infra/hardware#switch';

/**
 * bandwidth
 * 
 * Bandwidth associated to a Network Card
 *
 * http://w3id.org/devops-infra/hardware#bandwidth
 */
export const bandwidth: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#bandwidth';

/**
 * cab position
 * 
 * Cabinet where the Server Hardware Item is
 *
 * http://w3id.org/devops-infra/hardware#cabPosition
 */
export const cabPosition: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#cabPosition';

/**
 * contract number
 * 
 * Contract number for a batch of hardware items
 *
 * http://w3id.org/devops-infra/hardware#contractNumber
 */
export const contractNumber: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#contractNumber';

/**
 * date enabled
 * 
 * Date and time when the Hardware Item was enabled
 *
 * http://w3id.org/devops-infra/hardware#dateEnabled
 */
export const dateEnabled: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#dateEnabled';

/**
 * date on shelf
 * 
 * Date and time when the Hardware Item was put in a frame
 *
 * http://w3id.org/devops-infra/hardware#dateOnShelf
 */
export const dateOnShelf: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#dateOnShelf';

/**
 * disk size
 * 
 * The size (in GB) of a hard disk
 *
 * http://w3id.org/devops-infra/hardware#diskSize
 */
export const diskSize: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#diskSize';

/**
 * The type of a disk (SAS, SATA, etc.). This may be converted in the future to a SKOS theasurus
 * 
 * 
 *
 * http://w3id.org/devops-infra/hardware#diskType
 */
export const diskType: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#diskType';

/**
 * F5 type
 * 
 * Type of F5 hardware
 *
 * http://w3id.org/devops-infra/hardware#f5Type
 */
export const f5Type: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#f5Type';

/**
 * firewall type
 * 
 * Type of firewall
 *
 * http://w3id.org/devops-infra/hardware#firewallType
 */
export const firewallType: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#firewallType';

/**
 * The type of frame
 * 
 * 
 *
 * http://w3id.org/devops-infra/hardware#frameType
 */
export const frameType: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#frameType';

/**
 * hardware type
 * 
 * Type of hardware for a batch of hardware items, or for any hardware item
 *
 * http://w3id.org/devops-infra/hardware#hardwareType
 */
export const hardwareType: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#hardwareType';

/**
 * mac address
 * 
 * MAC address associated to a Network Card
 *
 * http://w3id.org/devops-infra/hardware#macAddress
 */
export const macAddress: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#macAddress';

/**
 * machine type
 * 
 * Type of machine
 *
 * http://w3id.org/devops-infra/hardware#machineType
 */
export const machineType: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#machineType';

/**
 * management IP
 * 
 * IP where management of the Server Hardware Item can be done
 *
 * http://w3id.org/devops-infra/hardware#managementIP
 */
export const managementIP: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#managementIP';

/**
 * management link
 * 
 * Link (URL) where management of the Hardware Item can be done
 *
 * http://w3id.org/devops-infra/hardware#managementLink
 */
export const managementLink: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#managementLink';

/**
 * management port
 * 
 * Port where management of the Hardware Item can be done
 *
 * http://w3id.org/devops-infra/hardware#managementPort
 */
export const managementPort: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#managementPort';

/**
 * port
 * 
 * port associated to a Network Card
 *
 * http://w3id.org/devops-infra/hardware#port
 */
export const port: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#port';

/**
 * power
 * 
 * Power connections for a frame
 *
 * http://w3id.org/devops-infra/hardware#power
 */
export const power: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#power';

/**
 * serial number
 * 
 * Serial number of a hardware item (server hardware, frames, network cards, etc.)
 *
 * http://w3id.org/devops-infra/hardware#serialNumber
 */
export const serialNumber: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#serialNumber';

/**
 * switch type
 * 
 * Type of switch
 *
 * http://w3id.org/devops-infra/hardware#switchType
 */
export const switchType: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#switchType';

/**
 * unit position
 * 
 * Unit where the Server Hardware Item is
 *
 * http://w3id.org/devops-infra/hardware#unitPosition
 */
export const unitPosition: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#unitPosition';

/**
 * unit price
 * 
 * Unit price for hardware items, frames, servers, etc.
 *
 * http://w3id.org/devops-infra/hardware#unitPrice
 */
export const unitPrice: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#unitPrice';

/**
 * uplink bandwidth
 * 
 * Uplink bandwidth of a switch
 *
 * http://w3id.org/devops-infra/hardware#uplinkBandwidth
 */
export const uplinkBandwidth: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#uplinkBandwidth';

/**
 * VLAN ID
 * 
 * ID of the VLAN associated to a Network Card
 *
 * http://w3id.org/devops-infra/hardware#vlanID
 */
export const vlanID: OwlDatatypeProperty = 'http://w3id.org/devops-infra/hardware#vlanID';

export const _BASE: IriString = 'http://w3id.org/devops-infra/hardware#';
export const _PREFIX: string = 'hardware';