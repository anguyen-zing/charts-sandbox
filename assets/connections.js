
window.addEventListener('load', async() => {

    const response = await fetch("/assets/connections_data.json");
    const connections_data = await response.json(); 

    const people = connections_data.people; 

    console.log(people);

    const type_color_code = {
        Friend: "#13D146",
        Family: "#FFE00F",
        Partner: "#FFA6F0", 
        Industry: "#0D8FDE",
        Conflict: "#B80000",
        Unknown: "#E0E0E0"
    }

    function get_person(id){
        for(let i = 0; i < people.length; i++){
            if(people[i].id == id){
                return people[i];
            }
        }

        return("Person Id Not Found");
    }

    function build_tree(central_id){
        const central_node = get_person(central_id);

        if(!central_node) return [];

        const tree_data = [
            {
                id: central_node.id,
                parent: "",
                name: central_node.name,
                value: 1
            }
        ];

        (central_node.relationships || []).forEach(connect => {
            const connected_person = get_person(connect.person);
            if(!connected_person) return;

            tree_data.push({
                id: connected_person.id,
                parent: central_node.id,
                name: connected_person.name,
                value: connect.strength * 1,
                type: connect.type,
                status: connect.status,
                strength: connect.strength,
            });
        });

        return tree_data;
    }

    // =======================
    //   CHART CONFIGURATION
    // =======================

    var cdata = {
        type: 'tree',
        options: {
          aspect: 'tree-radial',
          progression: 0,
          textAttr: 'name',
          valueAttr: 'value',
          minSize: 4,
          maxSize: 10,
          link: {
            aspect: 'arc'
          },
          node: {
            type: 'circle',
            borderWidth: 0,
            hoverState: {
              borderWidth: 2,
              borderColor: '#000',
              borderAlpha: 1
            },
            label: {
              width: 100
            }
          },
          weightedLinks: 0, // set to 1 to disable collapsible nodes
        },
        series: build_tree("taylor_swift")
    };

    // =======================
    //  RENDERING CHART HERE
    // =======================
    zingchart.render({
        id: 'myChart',
        height: '100%',
        output: 'svg', // or 'canvas'
        data: cdata
      });

    console.log("Test:", get_person("taylor_swift"));
});