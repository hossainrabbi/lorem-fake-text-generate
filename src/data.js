const lorem = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis pellentesque nibh. Ut eu cursus felis. Vivamus sit amet purus vel nisl cursus gravida. Pellentesque lorem ipsum, iaculis in est quis, scelerisque aliquet quam. Donec vel pellentesque ipsum. Ut facilisis tristique pulvinar. Suspendisse pellentesque consequat risus ac feugiat. Ut justo neque, aliquam et nunc nec, ultricies aliquet metus. Cras laoreet sem vehicula purus sagittis accumsan. Morbi molestie auctor justo vel maximus. Aenean eget accumsan est. Praesent rutrum, risus non finibus varius, sapien nunc pulvinar ligula, in laoreet dolor purus interdum lectus. Vivamus semper lectus eget est posuere commodo. Fusce porttitor commodo neque vel pharetra. Donec ornare elementum pretium. Pellentesque eu ante quam.`,

  `Proin mauris nulla, dapibus eu orci a, viverra semper mauris. Sed finibus, lacus sed luctus tristique, leo turpis commodo ante, in placerat ante mauris nec tortor. Sed suscipit efficitur nulla ut facilisis. Vivamus interdum quam a massa accumsan, vel feugiat ex accumsan. Morbi risus nisl, dictum at interdum ac, luctus eu lectus. Fusce magna leo, cursus a lobortis in, accumsan ac lorem. Etiam et scelerisque nibh. Praesent commodo urna eu magna finibus sollicitudin. In hac habitasse platea dictumst. Vivamus id lacus in ante pulvinar cursus ac eget purus. Nunc pellentesque odio sit amet nulla cursus tempor. Proin sodales cursus eros vel rutrum.`,

  `Quisque in vestibulum quam. Donec commodo condimentum lectus, non eleifend nunc consectetur ut. Sed aliquet nisi vel lacus tempus, eu semper elit auctor. Fusce placerat congue arcu id scelerisque. Nulla ut scelerisque dui. Quisque a ultricies risus. Duis efficitur orci vitae iaculis laoreet. In consectetur massa quis volutpat maximus. Donec feugiat molestie odio, in gravida turpis sodales vel.`,

  `Suspendisse imperdiet, augue vel volutpat consequat, urna elit semper eros, at bibendum tortor risus vitae quam. Nulla consequat arcu aliquet, dapibus lacus eu, hendrerit nulla. Nam ultricies et enim sit amet euismod. Donec sed eros vel leo ornare elementum. In cursus tincidunt ante sollicitudin viverra. Duis dictum et dolor at egestas. Duis justo mauris, laoreet eu est ac, imperdiet iaculis purus. Cras venenatis, eros non elementum facilisis, libero quam aliquet ligula, nec aliquet magna mauris non ligula. Aenean aliquam quis risus suscipit dignissim.`,

  `Aliquam quis sem porta, efficitur libero in, finibus ex. Nulla fermentum justo a aliquam iaculis. Sed eu mi ut justo pharetra malesuada. Integer elementum turpis a viverra facilisis. Suspendisse potenti. Quisque at mauris eu quam pellentesque varius. Etiam mi justo, bibendum id efficitur sit amet, ultricies nec elit. Aliquam semper tincidunt luctus.`,

  `Phasellus sed vulputate lectus. Cras interdum dictum accumsan. Morbi nec arcu ac nunc pellentesque ullamcorper eget et mauris. Etiam et mattis justo, id luctus lacus. Maecenas feugiat velit auctor nisi blandit consectetur non id urna. Nunc nunc ipsum, iaculis at semper eu, sagittis fermentum dui. Fusce eget turpis tellus. Donec vitae arcu tincidunt, vehicula libero vel, ullamcorper est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,

  `Sed egestas elementum purus eu interdum. Aliquam erat volutpat. In sit amet arcu eget elit rhoncus tincidunt a et ex. Sed tristique erat tortor, quis cursus eros lacinia in. Sed ut metus faucibus, maximus sem nec, placerat tortor. Aliquam laoreet lacus felis, nec semper odio tincidunt in. Integer venenatis, tortor nec luctus posuere, velit sapien mattis dolor, hendrerit pellentesque nunc enim quis lacus. Donec vitae massa non quam luctus efficitur quis nec massa. Praesent volutpat dolor id nisl rutrum, nec eleifend velit elementum. Sed at dui metus. Etiam dapibus tincidunt risus, non dictum augue vehicula consectetur. Proin tristique consectetur mi, non sodales ligula feugiat at. Nam non leo odio. Aliquam egestas blandit ante at aliquet. Nullam nulla diam, aliquet at nibh non, viverra semper eros.`,

  `Quisque fermentum risus a lacus laoreet consectetur. Ut tortor orci, tempor in libero eu, consequat venenatis dui. Nulla facilisi. Etiam aliquam vel est sit amet imperdiet. Ut non fermentum sapien. Praesent ultricies, nibh ut porttitor eleifend, erat ante tincidunt odio, eu blandit lectus felis sit amet lacus. Proin sagittis mauris in eleifend consequat. Quisque sit amet consequat nunc, nec lacinia lorem. Etiam sit amet purus metus. Vivamus non laoreet neque.`,

  `Vestibulum augue ante, tristique eget turpis in, lobortis consequat diam. Donec ac nisl sagittis, lobortis quam et, congue nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum efficitur condimentum sem eu luctus. Integer sit amet fermentum risus, non malesuada tellus. Duis cursus risus eu leo pulvinar, sit amet pharetra sapien lacinia. Curabitur feugiat fringilla felis, vel blandit nunc pulvinar vel. Nunc tristique sapien sit amet pretium auctor.`,

  `Maecenas hendrerit egestas augue. Nulla eget luctus dolor, nec imperdiet ante. Aenean luctus ornare interdum. In ornare posuere magna sit amet semper. Morbi vestibulum neque at massa vulputate fringilla. Proin laoreet faucibus odio sit amet hendrerit. Suspendisse rutrum, metus eget consectetur eleifend, neque ante ultricies eros, aliquet convallis lorem enim vitae urna. Vivamus vulputate convallis nunc ac iaculis. Curabitur porta facilisis tellus sed vulputate. Donec mattis enim orci, eget cursus arcu porttitor a. Sed vestibulum, sapien sit amet elementum egestas, lorem justo blandit lorem, vitae finibus nulla orci ut odio. Etiam a semper elit, quis placerat quam. Morbi scelerisque fringilla tempor.`,

  `In rhoncus purus mi, vel commodo tortor malesuada dictum. Pellentesque tincidunt ut urna id elementum. Praesent in libero vel quam suscipit porta non a enim. Phasellus in egestas quam. Curabitur congue, neque a interdum tempus, arcu leo consectetur neque, vel egestas urna diam in mi. Duis a tortor ut felis consectetur cursus. Duis sagittis convallis purus sed efficitur. Ut luctus porta varius. In in finibus nisl, sit amet luctus sapien. Nulla tellus nisi, ultrices sit amet massa malesuada, egestas viverra dolor. Nam pulvinar ante justo, et elementum ex eleifend sollicitudin.`,

  `Nulla vitae ante vestibulum, gravida purus egestas, laoreet lorem. Etiam at condimentum ex. Vestibulum imperdiet malesuada ex in pulvinar. Mauris eu purus egestas, lacinia lacus sit amet, maximus neque. Phasellus efficitur mi in sem semper varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu commodo odio. Maecenas eros est, scelerisque at condimentum vitae, placerat ac massa. Cras volutpat ultricies scelerisque. Nullam aliquam vestibulum aliquam. Sed laoreet feugiat urna, ac interdum augue ornare eget. Duis est erat, finibus et pretium quis, mollis suscipit purus. Nulla imperdiet nisl ut dapibus malesuada. Cras pharetra massa dolor, eget posuere magna bibendum a. Pellentesque eget sem est.`,

  `Aenean sit amet ex metus. Suspendisse sapien lectus, ultrices et turpis maximus, blandit venenatis tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam finibus, mi eu imperdiet malesuada, dui magna dignissim enim, in tempus lectus tellus eu sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin vitae mollis augue, id iaculis neque. In purus est, pharetra vitae enim nec, ullamcorper venenatis neque. Phasellus egestas aliquet lorem id luctus. In eu velit eu ante mattis lacinia. Nullam sit amet luctus nulla.`,

  `Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean rutrum velit quis justo dictum, nec viverra lectus congue. Vivamus eu porta magna. Morbi ut lectus vestibulum, sagittis enim a, rutrum elit. Duis turpis odio, imperdiet vel posuere vel, mollis non ante. Mauris ut nunc a lacus convallis semper. Nullam cursus euismod efficitur. Morbi a ante vel nibh imperdiet ultrices. Nam id augue commodo, semper nisl id, pellentesque lorem. Suspendisse sit amet ex purus. Ut condimentum tortor lectus, ac mattis nisl pulvinar sit amet.`,

  `Duis mattis pulvinar faucibus. Morbi pretium pellentesque rutrum. Vestibulum quis pretium massa, quis cursus ante. Aenean sit amet justo ut nunc accumsan suscipit id in neque. Aliquam sed rutrum tellus, id ullamcorper nulla. Sed vitae egestas quam, eu imperdiet lacus. Nulla facilisi. Nulla vel arcu sapien.`,

  `Cras sed imperdiet arcu, vitae vestibulum nisl. Vivamus tincidunt orci a lacus scelerisque vulputate. Pellentesque in eleifend nibh, ut gravida nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut semper vehicula magna. Etiam tempus sem eget rhoncus tristique. Sed eget lorem at nisl malesuada mollis. Donec aliquet cursus laoreet.`,

  `Sed mattis finibus blandit. Nullam congue leo in nisl euismod, mattis varius dolor vehicula. Aliquam rhoncus augue diam, fermentum commodo ligula posuere at. Aliquam erat volutpat. Vestibulum dignissim vel erat vel mollis. Sed fermentum ultricies lectus, sit amet efficitur odio dignissim a. Vivamus ac justo sapien. Ut tristique tellus et aliquet mattis. Integer posuere semper mattis. Aenean egestas, lacus vitae accumsan semper, nibh felis varius nulla, et malesuada est nulla ac velit. Aliquam vitae odio elementum, pharetra justo at, facilisis metus. Morbi et lacus ac ipsum porttitor sagittis a eu ipsum.`,

  `Nam dignissim orci dui, at bibendum est commodo at. Fusce non lobortis enim. Nam eget justo eget nibh lacinia accumsan ut id enim. In semper rhoncus velit id lobortis. Aliquam gravida, dolor eu pulvinar consequat, risus massa placerat mi, quis dictum augue nulla eu nunc. Phasellus egestas nunc id eros egestas tempus. Nullam leo diam, porttitor in ex quis, volutpat ultricies urna. Donec eget orci convallis risus fringilla blandit. Quisque dapibus, tortor eu interdum fermentum, diam purus commodo arcu, eu elementum eros sem eu justo.`,

  `Cras dictum lacus diam, in rhoncus nulla lacinia ut. Pellentesque arcu leo, pharetra quis semper quis, luctus sit amet tellus. Nullam elementum volutpat magna, eu mattis enim volutpat eget. Nam interdum vehicula mollis. Donec placerat, est in elementum condimentum, justo erat fermentum erat, et placerat nunc urna in dui. Donec vel dui quis eros venenatis malesuada. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu nunc odio. Ut efficitur tincidunt nisl sit amet euismod.`,

  `Etiam tincidunt mauris ac nisl semper, ut egestas purus egestas. Cras nec vestibulum sapien. Morbi vel consequat magna. Sed sed interdum urna. Quisque ornare pretium est, vitae finibus dui condimentum nec. Donec at iaculis ligula. Maecenas mattis augue eu ligula finibus, a cursus ligula rhoncus. Duis lacinia tellus sed est accumsan ultrices. Praesent tincidunt tempus malesuada.`,
];

export default lorem;
